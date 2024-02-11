import { Service } from 'typedi';
import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { AppDataSource } from '@base/config/db';
import { IRepository } from '@base/infrastructure/abstracts/IRepository';
import { Truck } from '@base/api/models/Truck';

@Service()
export class TruckRepository extends RepositoryBase<Truck> implements IRepository<Truck>{

  constructor() {
    super(AppDataSource.getRepository(Truck));
  }



}
