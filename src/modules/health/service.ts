import { Injectable } from '@nestjs/common'
import {AsyncStorageService} from "../async-storage/async-storage.service";
import {RequestContext} from "../../models/request-context";

@Injectable()
export class HealthService {
  constructor( private asyncLocalStorageService :AsyncStorageService) {
  };
  getStatus(): string {
    let permissions = this.getRequestContext().permissions

    permissions = [...permissions, 'custom:permissions:addon1']
    this.getRequestContext().permissions = permissions

    const perm = [] as string[]
    perm.push("1")
    perm.push("2")


    console.log(perm)
    // this.asyncLocalStorageService.getAsyncLocalStorage().run(
    //
    // )

    this.printPermissions()

    return 'Health as a horse!'
  }

  printPermissions(){
    console.log(this.getRequestContext().permissions)
  }
  getRequestContext(): RequestContext {
    return this.asyncLocalStorageService.getRequestContext() as unknown as RequestContext
  }
}
