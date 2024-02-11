import { Inject, Service } from "typedi";
import { OpenAPI } from "routing-controllers-openapi";
import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { JsonController, Get, Param, Post, Body } from "routing-controllers";
import { TruckService } from "@base/api/services/Trucks/TruckService";
import { Truck } from "@base/api/models/Truck";

@Service()
@OpenAPI({})
@JsonController('/trucks')
export class TruckController extends ControllerBase {

  @Inject()
  private service: TruckService;

  public constructor() {
    super();
  }

  @Get()
  async findAll(): Promise<Truck[]> {
    return await this.service.findAll();
  }
  @Get('/:id')
  async findById(@Param('id') id: number): Promise<Truck | null> {
    return await this.service.findById(id);
  }

  @Post()
  async create(@Body() data: Partial<Truck>): Promise<Truck> {
    return this.service.create(data);
  }
}