import { Container, Service } from 'typedi';

import { CategoryRepository } from '@base/api/repositories/LookUp/CategoryRepository';
import { ServiceBase } from '@base/infrastructure/abstracts/ServiceBase';
import { Category } from '@base/api/models/Category';

@Service()
export class CategoryService extends ServiceBase<Category> {

  constructor() {
    super(Container.get(CategoryRepository));
  }

}
