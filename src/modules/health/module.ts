import { Module } from '@nestjs/common'
import { HealthService } from './service'
import {AsyncStorageModule} from "../async-storage/async-storage.module";

@Module({
  imports: [AsyncStorageModule],
  controllers: [],
  providers: [HealthService],
})
export class HealthModule {}
