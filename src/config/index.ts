import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const modelPath = join(__dirname, '..', '/**/*.entity{.ts,.js}');

const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'test',
  database: 'test',
  entities: [modelPath],
  synchronize: true,
}

const config = {
  port: 3000,
  host: '0.0.0.0',

  db: dbConfig,
};

export default config;
