import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { JsonController, Get, Param, Post, Body } from "routing-controllers";
import { Inject, Service } from "typedi";
import { OpenAPI } from "routing-controllers-openapi";
import { DishService } from "@base/api/services/Orders/DishService";
import { Dish } from "@base/api/models/Dish";

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
  async findAll(): Promise<Dish[]> {
    return await this.service.findAll();
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