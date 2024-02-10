import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { JsonController, Get } from "routing-controllers";
import { Inject, Service } from "typedi";
import { RegisterService } from '@api/services/Auth/RegisterService';
import { OpenAPI } from "routing-controllers-openapi";

@Service()
@OpenAPI({})
@JsonController('/dishes')
export class DishesController extends ControllerBase {

  @Inject()
  private registerService: RegisterService;

  public constructor() {
    super();
  }

  @Get("/all")
  public async getAllDishes() {
    return "ritorna tutti i piatti e prodotti disponibili oggi"
  }

}