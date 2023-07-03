import { Module } from '@nestjs/common';
import { HealthModule } from "./modules/health/module";
import {HealthController} from "./controller/health";
import {HealthService} from "./modules/health/service";

@Module({
  imports: [HealthModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class AppModule {}
