import { Request } from 'express'

export interface IMiddleWare {
  shouldSkipValidationForCurrentRequest(request: Request): boolean
}
