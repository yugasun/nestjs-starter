import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CacheModuleOptions } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

const modelPath = join(__dirname, '..', '/**/*.entity{.ts,.js}');

// mysql config
const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [modelPath],
  synchronize: true,
};

// redis config
const redisConfig: CacheModuleOptions = {
  store: redisStore,
  host: 'localhost',
  port: 6379,
};

const config = {
  port: 3000,
  host: '0.0.0.0',

  db: dbConfig,

  redis: redisConfig,
};

export default config;
