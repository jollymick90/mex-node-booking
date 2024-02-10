import 'module-alias/register';
import 'reflect-metadata';
import express from 'express';
import {
  useContainer as routingControllersUseContainer,
  useExpressServer,
} from 'routing-controllers';
import Container from 'typedi';

import { appConfig } from './config/app';
import { AppDataSource } from './config/db';
import { UserRepository } from './api/repositories/Users/UserRepository';

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
}

new App();