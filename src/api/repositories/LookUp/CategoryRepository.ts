import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { Service } from 'typedi';
import { AppDataSource } from '@base/config/db';
import { Category } from '@base/api/models/Category';
import { IRepository } from '@base/infrastructure/abstracts/IRepository';

@Service()
export class CategoryRepository extends RepositoryBase<Category>  implements IRepository<Category>{

  constructor() {
    super(AppDataSource.getRepository(Category));
    // this.repository = AppDataSource.getRepository(Category);
  }

  // public async create(data: object) {
  //   let entity = new Category();

  //   Object.assign(entity, data);

  //   return await this.repository.save(entity);
  // }

  // public async update(user: Category, data: object) {
  //   Object.assign(user, data);

  //   return await user.save(data);
  // }

  // public async findById(id: number) {
  //   return await this.repository.findOneBy({ id })
  // }

  // public async delete(id: number) {
  //   return await this.repository.delete({ id });
  // }
}
