import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo/photo.module';
import config from './config';

@Module({
  imports: [TypeOrmModule.forRoot(config.db), PhotoModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
