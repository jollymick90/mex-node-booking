import { Inject, Service } from "typedi";
import { OpenAPI } from "routing-controllers-openapi";
import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { JsonController, Get, Param, Post, Body } from "routing-controllers";
import { DishService } from "@base/api/services/Orders/DishService";
import { Dish } from "@base/api/models/Dish";
import { DishDTO } from "@base/api/responses/Orders/order.interface";

@Service()
@OpenAPI({})
@JsonController('/dishes')
export class DishController extends ControllerBase {

  @Inject()
  private service: DishService;

  public constructor() {
    super();
  }

  @Get()
  async findAll(): Promise<DishDTO[]> {
    return await this.service.findAllDTO();
  }
  @Get('/:id')
  async findById(@Param('id') id: number): Promise<Dish | null> {
    return await this.service.findById(id);
  }

  @Post()
  async create(@Body() data: Partial<Dish>): Promise<Dish> {
    return this.service.create(data);
  }
}