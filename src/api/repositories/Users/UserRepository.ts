import { DataSource, EntityRepository, Repository } from 'typeorm';

import { User } from '@api/models/Users/User';
import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { Service } from 'typedi';
import { AppDataSource } from '@base/config/db';

@Service()
export class UserRepository extends RepositoryBase<User> {

  constructor() {
    super(AppDataSource.getRepository(User));
  }

  public async createUser(data: object) {
    let entity = new User();

    Object.assign(entity, data);

    return await this.repository.save(entity);
  }

  public async updateUser(user: User, data: object) {
    Object.assign(user, data);

    return await user.save(data);
  }

  public async findOneByEmail(email: string) {
    return await this.repository.findOne({

      relations: {
        role: true
      }, 
      where: {
        email: email
      }
    }
    )
  }

  public async findById(id: number) {
    return await this.repository.findOneBy({
      id: id
    })
  }
}
