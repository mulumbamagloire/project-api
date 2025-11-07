import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MgController } from './mg/mg.controller';

@Module({
  imports: [],
  controllers: [AppController, MgController],
  providers: [AppService],
})
export class AppModule {}
