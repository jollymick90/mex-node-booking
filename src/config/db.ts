import { env } from '@base/utils/env';
import { DataSource } from 'typeorm';

const dbConfig = {
  type: 'postgres',
  dbHost: env('TYPEORM_HOST'),
  dbPort: env('TYPEORM_PORT'),
  dbDatabase: env('TYPEORM_DATABASE'),
  dbUsername: env('TYPEORM_USERNAME'),
  dbPassword: env('TYPEORM_PASSWORD'),
  dbEntities: env('TYPEORM_ENTITIES'),
  dbSchema: env('TYPEORM_SCHEMA'),
  allowLogging: env('TYPEORM_LOGGING'),
};
console.log(dbConfig)
export const AppDataSource = new DataSource({
    type: "postgres",
    host: dbConfig.dbHost,
    port: +dbConfig.dbPort,
    schema: dbConfig.dbSchema,
    username: dbConfig.dbUsername,
    password: dbConfig.dbPassword,
    database: dbConfig.dbDatabase,
    synchronize: true,
    logging: true,
    entities: ['src/api/models/**/*.ts'],
    // subscribers: [],
    // migrations: [],
})