import { Container, Service } from 'typedi';

import { ServiceBase } from '@base/infrastructure/abstracts/ServiceBase';
import { Dish } from '@base/api/models/Dish';
import { DishRepository } from '@base/api/repositories/Orders/DishRepository';

@Service()
export class DishService extends ServiceBase<Dish> {

  constructor() {
    super(Container.get(DishRepository));
  }

}
