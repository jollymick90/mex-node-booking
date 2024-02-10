import 'module-alias/register';
import 'reflect-metadata';
import * as swaggerUiExpress from 'swagger-ui-express';
import express from 'express';
import {
  useContainer as routingControllersUseContainer,
  useExpressServer,
  getMetadataArgsStorage
} from 'routing-controllers';
import Container from 'typedi';

import { appConfig } from './config/app';
import { AppDataSource } from './config/db';
import { UserRepository } from './api/repositories/Users/UserRepository';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

class App {
private app: express.Application = express();
  private port: Number = appConfig.port;

  constructor () {
    
    this.bootstrap();
  }
  async bootstrap() {
    this.useContainers();
    await this.typeOrmCreateConnection();
    this.registerSocketControllers();
    this.registerDefaultHomePage();
    this.registerRoutingControllers();
    this.setupSwagger();

  }
  private async typeOrmCreateConnection() {
    try {
      // Container.set(DataSource, AppDataSource);
      // const AppDataSource = Container.get("AppDataSource");
      await AppDataSource.initialize();
    } catch (error) {
      console.log('Caught! Cannot connect to database: ', error);
    }
  }
  private registerSocketControllers() {
    const server = require('http').Server(this.app);
    // const io = require('socket.io')(server);

    // this.app.use(function (req: any, res: any, next) {
    //   req.io = io;
    //   next();
    // });

    server.listen(this.port, () => console.log(`🚀 Server started at http://localhost:${this.port}\n🚨️ Environment: ${process.env.NODE_ENV}`));
    
  }
  private registerRoutingControllers() {
    useExpressServer(this.app, {
      validation: { stopAtFirstError: true },
      cors: true,
      classTransformer: true,
      defaultErrorHandler: false,
      routePrefix: appConfig.routePrefix,
      controllers: [__dirname + appConfig.controllersDir]
      // middlewares: [__dirname + appConfig.middlewaresDir],
    });
  }
  private useContainers() {
    routingControllersUseContainer(Container);
    Container.set('UserRepository', UserRepository);
    // typeormOrmUseContainer(containerTypeorm);

  }
  private registerDefaultHomePage() {
    this.app.get('/', (req, res) => {
      res.json({
        title: appConfig.name,
        mode: appConfig.node,
        date: new Date(),
      });
    });
  }

  private setupSwagger() {
    // Parse class-validator classes into JSON Schema
    const schemas = validationMetadatasToSchemas({
      refPointerPrefix: '#/components/schemas/',
    });

    // Parse routing-controllers classes into OpenAPI spec:
    const storage = getMetadataArgsStorage();
    const spec = routingControllersToSpec(
      storage,
      { routePrefix: appConfig.routePrefix },
      {
        components: {
          schemas,
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
            },
          },
        },
        info: {
          description: 'Takana',
          title: 'API Takana Documentation',
          version: '0.0.1',
          contact: {
            name: 'Takana',
            url: 'https://takana.it',
            email: 'support@takana.it',
          },
        },
      },
    );

    // Use Swagger
    this.app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(spec));
  }
}

new App();