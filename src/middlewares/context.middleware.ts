import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'
import * as uuid from 'uuid'
import { AsyncStorageService } from '../modules/async-storage/async-storage.service'

import { buildSiteContext } from '../lib/utils'

import { APP_CONSTANTS, ENV, HEADERS } from '../config/constants'
import { IMiddleWare } from './IMiddleware'
import { RequestContext } from '../models/request-context'

interface SiteContext {
  account?: string
  stage?: string
  channel?: string | number
  date?: string
}

/* This context middleware is used for build the request context with tenantId, userId, stage and requestId.
This context would be used as an async storage across loggers, feature flag checks etc.
*/
// TODO: Refactor this
// TODO: Also try collecting config for all the paths.
// If not, just don't throw error as this info will be used in auth middle-wares
@Injectable()
export class ContextMiddleware implements NestMiddleware, IMiddleWare {
  constructor(private readonly asyncStorageService: AsyncStorageService) {}

  use(req: Request, res: Response, next: NextFunction): void {
    const reqContext: RequestContext = {}
    let xSiteContext: SiteContext = {}
    reqContext.permissions = [ 'custom:permissions:p1']

    if (!this.shouldSkipValidationForCurrentRequest(req)) {
      // Parse x-site-context
      xSiteContext = buildSiteContext(req.headers)
      reqContext.stage = xSiteContext.stage
      reqContext.tenantId = xSiteContext.account
    }
    // Extract requestId
    if (req.headers[HEADERS.X_FABRIC_REQUEST_ID]) {
      reqContext.requestId = req.headers[HEADERS.X_FABRIC_REQUEST_ID] as string
    } else {
      reqContext.requestId = uuid.v1()
    }
    // // Adding xSiteContext and Authorization headers in the request context for backward compatibility and for passing the headers from CAPIO/Gateway layer to service layer
    // req.reqContext = reqContext
    // req.reqContext.xSiteContext = xSiteContext
    // req.reqContext.Authorization = (req.headers.Authorization ||
    //   req.headers.authorization) as string
    res.append(HEADERS.X_FABRIC_REQUEST_ID, reqContext.requestId)

    const asyncLocalContext = JSON.parse(JSON.stringify(reqContext))
    this.asyncStorageService
      .getAsyncLocalStorage()
      .run(asyncLocalContext, next, 'route')
  }

  shouldSkipValidationForCurrentRequest(request: Request): boolean {
    // If no request configuration is found, then do all the validations
    return true
  }
}
