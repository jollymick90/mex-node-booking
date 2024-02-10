import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { JsonController, Get } from "routing-controllers";
import { Inject, Service } from "typedi";
import { RegisterService } from '@api/services/Auth/RegisterService';
import { OpenAPI } from "routing-controllers-openapi";

@Service()
@OpenAPI({})
@JsonController('/where')
export class WhereController extends ControllerBase {

  @Inject()
  private registerService: RegisterService;

  public constructor() {
    super();
  }

  @Get("/now")
  public async getWhereNow() {
    return "ritorna dove ci trovi oggi"
  }

  @Get("/week")
  public async getWhereWeek() {
    return "ritorna dove ci trovi questa settimana"
  }
}