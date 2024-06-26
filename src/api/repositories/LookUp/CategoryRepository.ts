import { Service } from 'typedi';
import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { AppDataSource } from '@base/config/db';
import { Category } from '@base/api/models/Category';
import { IRepository } from '@base/infrastructure/abstracts/IRepository';

@Service()
export class CategoryRepository extends RepositoryBase<Category>  implements IRepository<Category>{

  constructor() {
    super(AppDataSource.getRepository(Category));
  }

}
