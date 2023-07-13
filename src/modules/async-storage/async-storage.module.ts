import { AsyncStorageService } from './async-storage.service'
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common'

@Module({
  imports: [],
  exports: [AsyncStorageService],
  controllers: [],
  providers: [AsyncStorageService]
})
export class AsyncStorageModule {}
