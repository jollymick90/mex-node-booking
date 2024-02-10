import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { JsonController, Post, Body } from "routing-controllers";
import { Inject, Service } from "typedi";
import { RegisterRequest } from '@api/requests/Auth/RegisterRequest';
import { RegisterService } from '@api/services/Auth/RegisterService';
import { OpenAPI } from "routing-controllers-openapi";

@Service()
@OpenAPI({
  tags: ['Auth'],
})
@JsonController('/register')
export class RegisterController extends ControllerBase {

  @Inject()
  private registerService: RegisterService;

  public constructor() {
    super();
  }

  @Post()
  public async register(@Body() user: RegisterRequest) {
    return await this.registerService.register(user);
  }
}