import { Service } from 'typedi';
import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { AppDataSource } from '@base/config/db';
import { IRepository } from '@base/infrastructure/abstracts/IRepository';
import { Dish } from '@base/api/models/Dish';

@Service()
export class DishRepository extends RepositoryBase<Dish>  implements IRepository<Dish>{

  constructor() {
    super(AppDataSource.getRepository(Dish));
  }

}
