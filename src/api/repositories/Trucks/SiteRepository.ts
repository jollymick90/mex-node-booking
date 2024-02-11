import { Service } from 'typedi';
import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { AppDataSource } from '@base/config/db';
import { IRepository } from '@base/infrastructure/abstracts/IRepository';
import { Truck } from '@base/api/models/Truck';
import { Site } from '@base/api/models/Site';

@Service()
export class SiteRepository extends RepositoryBase<Site>  implements IRepository<Site>{

  constructor() {
    super(AppDataSource.getRepository(Site));
  }

}
