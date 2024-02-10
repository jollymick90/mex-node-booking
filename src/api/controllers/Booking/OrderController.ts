import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { JsonController, Get, Param, Post, Body, Put } from "routing-controllers";
import { Inject, Service } from "typedi";
import { RegisterService } from '@api/services/Auth/RegisterService';
import { OpenAPI } from "routing-controllers-openapi";
import { OrderRequest } from "@base/api/requests/Dishes/OrderRequest";

@Service()
@OpenAPI({})
@JsonController('/order')
export class OrderController extends ControllerBase {

  @Inject()
  private registerService: RegisterService;

  public constructor() {
    super();
  }

  @Get("/all")
  public async getAllMyOrders() {
    return "ritorna tutti i miei ordini di oggi";
  }

  @Get("/:id")
  public async getOrersById(@Param("id") id: number) {
    return "ritorna i dettagli dell'ordine  " + id
  }

  @Post()
  public async newOrder(@Body() order: OrderRequest) {
    return "Crea un nuovo ordine"
  }

  @Put("/draft/:id")
  public async updateOrder(@Param("id") id: number, @Body() order: OrderRequest) {
    return "Serve per modificare un ordine non ancora inviato"
  }

  @Put("/send/:id")
  public async sendOrder(@Param("id") id: number, @Body() order: OrderRequest) {
    return "Serve per confermare l'ordine"
  }
}