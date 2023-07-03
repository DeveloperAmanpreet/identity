import { Module } from '@nestjs/common';
import {HealthService} from "./service";

@Module({
  imports: [],
  controllers: [],
  providers: [HealthService],
})
export class HealthModule {}
