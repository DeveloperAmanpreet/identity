// Evaluates a condition without throwing an exception, returns 'defaultVal' instead

import { HEADERS } from '../config/constants'
import {Injectable} from "@nestjs/common";
import {AsyncStorageService} from "../modules/async-storage/async-storage.service";


/* eslint-disable @typescript-eslint/ban-types */
export const getSafe = (fn: Function, defaultVal?: any): any => {
  try {
    return fn()
  } catch (e) {
    return defaultVal
  }
}

export const getAccount = (headers) => {
  if (headers[HEADERS.X_FABRIC_TENANT_ID]) {
    return headers[HEADERS.X_FABRIC_TENANT_ID]
  } else if (headers[HEADERS.X_SITE_CONTEXT]) {
    try {
      const xSiteContext = JSON.parse(headers[HEADERS.X_SITE_CONTEXT])
      if (!xSiteContext.account) {
        throw new Error("Error1")
      }
      return xSiteContext.account
    } catch (e) {
      throw new Error("Error2")
    }
  } else {
    throw new Error("Error3")
  }
}

export const buildSiteContext = (headers: Record<string, any>) => {
  const xSiteContext = { stage: 'stg02', account: '' }
  if (headers[HEADERS.X_FABRIC_TENANT_ID]) {
    return processXFabricTenantIdHeader(xSiteContext, headers)
  }
  if (headers[HEADERS.X_SITE_CONTEXT]) {
    return processXSiteContextHeader(
      xSiteContext,
      headers[HEADERS.X_SITE_CONTEXT]
    )
  }
  throw new Error('Error5')
}

const processXSiteContextHeader = (
  siteContext: { account: string; stage: string },
  xSiteContext: string
) => {
  const errorToThrow = new Error('Error6')
  try {
    const { account, stage } = JSON.parse(xSiteContext)
    siteContext.account = account
    siteContext.stage = stage || siteContext.stage
  } catch (error: any) {
    throw errorToThrow
  }
  if (!siteContext.account || !siteContext.stage) throw errorToThrow
  return siteContext
}

const processXFabricTenantIdHeader = (
  xSiteContext: { stage: string; account: string },
  headers: Record<string, any>
) => {
  xSiteContext.account = headers[HEADERS.X_FABRIC_TENANT_ID]
  xSiteContext.stage = headers[HEADERS.X_FABRIC_STAGE] || xSiteContext.stage
  return xSiteContext
}

@Injectable()
export class UtilityService {
  constructor(private readonly asyncLocalStorage: AsyncStorageService) {}

  getHeader(): any {
    return this.asyncLocalStorage.getAsyncLocalStorage().getStore()
  }

  getContext() {
    return {
      stage: this.getHeader().stage,
      tenantId: this.getHeader().tenantId,
      user: {
        id: this.getHeader().userId
      },
      permissions: this.getHeader().permissions
    }
  }
}


@Injectable()
export class PermissionChecker {
  constructor(private readonly utilityService: UtilityService) {}

  verify(...permissions: string[]){
    const userPermissions = this.utilityService.getContext().permissions
    for(const permission of permissions){
      if(!userPermissions.includes(permission)){
        return false;
      }
    }

    return true;
  }
}
