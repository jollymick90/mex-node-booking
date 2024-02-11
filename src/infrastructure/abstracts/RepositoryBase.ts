import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';

import { EntityBase } from "./EntityBase";
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class RepositoryBase<T extends EntityBase> {
  
  constructor(public readonly repository: Repository<T>) {}

  public async findAll(): Promise<T[]> {
    return this.repository.find();
  }
  
  public async findById(id: number): Promise<T | null> {
    return this.repository.findOneBy({ id } as FindOptionsWhere<T>)
  }

  public async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  public async update(id: number, data: QueryDeepPartialEntity<T>): Promise<T | null> {
     this.repository.update({ id } as FindOptionsWhere<T>, data);
    return this.findById(id);
  }

  public async delete(id: number): Promise<void> {
    this.repository.delete({ id } as FindOptionsWhere<T>);
  }
}
