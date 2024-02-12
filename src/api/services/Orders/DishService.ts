import { Container, Service } from 'typedi';

import { ServiceBase } from '@base/infrastructure/abstracts/ServiceBase';
import { Dish } from '@base/api/models/Dish';
import { DishRepository } from '@base/api/repositories/Orders/DishRepository';
import { DishDTO } from '@base/api/responses/Orders/order.interface';
import { mapDishToDTO } from '@base/api/mappers/order.mapper';
import { IDishRepository } from '@base/api/repositories/Orders/IDishRepository';

@Service()
export class DishService extends ServiceBase<Dish, IDishRepository> {

  constructor() {
    super(Container.get(DishRepository));
  }
  public async findAllDTO(): Promise<DishDTO[]> {

    const entities: Dish[] = await this.repository.findAllFull();

    return entities.map(mapDishToDTO);
}
}
