/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common'
import { AsyncLocalStorage } from 'async_hooks'
import {RequestContext} from "../../models/request-context";

@Injectable()
export class AsyncStorageService {
  asyncLocalStorage: AsyncLocalStorage<unknown> | undefined = undefined

  getAsyncLocalStorage(): AsyncLocalStorage<unknown> {
    if (this.asyncLocalStorage === undefined) {
      this.asyncLocalStorage = new AsyncLocalStorage()
    }
    return this.asyncLocalStorage
  }

  getRequestContext(): RequestContext {
    return this.getAsyncLocalStorage().getStore() as RequestContext
  }
}
