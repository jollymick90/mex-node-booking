import {
  Body,
  Get,
  JsonController,
  Post,
} from 'routing-controllers';
import { Inject, Service } from 'typedi';

import { LoginRequest } from '@base/api/requests/Auth/LoginRequest';
import { LoginService } from '@base/api/services/Auth/LoginService';
import { ControllerBase } from '@base/infrastructure/abstracts/ControllerBase';
import { OpenAPI } from 'routing-controllers-openapi';

@Service()
@OpenAPI({
  tags: ['Auth'],
})
@JsonController('/login')
export class LoginController extends ControllerBase {
  
  @Inject()
  private loginService: LoginService;

  public constructor() {
    super();
  }

  @Post()
  public async login(@Body() user: LoginRequest) {
    return await this.loginService.login(user);
  }

  @Get()
  public async getTest() {
    return "hello";
  }
}