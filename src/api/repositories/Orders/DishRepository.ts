import { Service } from 'typedi';
import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { AppDataSource } from '@base/config/db';
import { Dish } from '@base/api/models';
import { IDishRepository } from './IDishRepository';

@Service()
export class DishRepository extends RepositoryBase<Dish> implements IDishRepository {

  constructor() {
    super(AppDataSource.getRepository(Dish));
  }

  async findAllFull(): Promise<Dish[]> {
    return this.repository.find({
      relations: {
        tags: true,
        categories: true
      }
    })
  };

}
