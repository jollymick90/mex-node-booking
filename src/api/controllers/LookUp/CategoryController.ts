import { Inject, Service } from "typedi";
import { OpenAPI } from "routing-controllers-openapi";
import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { JsonController, Get, Param, Post, Body } from "routing-controllers";
import { CategoryService } from "@base/api/services/LookUp/CategoryService";
import { Category } from "@base/api/models/Category";

@Service()
@OpenAPI({})
@JsonController('/categories')
export class CategoryController extends ControllerBase {

  @Inject()
  private service: CategoryService;

  public constructor() {
    super();
  }
  @Get()
  async findAll(): Promise<Category[]> {
    return await this.service.findAll();
  }
  @Get('/:id')
  async findById(@Param('id') id: number): Promise<Category | null> {
    return await this.service.findById(id);
  }

  @Post()
  async create(@Body() data: Partial<Category>): Promise<Category> {
    return this.service.create(data);
  }
}