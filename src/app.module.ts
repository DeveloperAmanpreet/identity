import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common'
import { HealthModule } from './modules/health/module'
import { HealthController } from './controller/health'
import { HealthService } from './modules/health/service'
import {ContextMiddleware} from "./middlewares/context.middleware";
import {AsyncStorageModule} from "./modules/async-storage/async-storage.module";

@Module({
  imports: [HealthModule, AsyncStorageModule],
  controllers: [HealthController],
  providers: [HealthService],
})

@Module({})
export class AppModule implements NestModule {

  // Middlewares
  configure(consumer: MiddlewareConsumer): void {

    consumer
      .apply(ContextMiddleware)
      .forRoutes({ path: '/**', method: RequestMethod.ALL })
  }

}



