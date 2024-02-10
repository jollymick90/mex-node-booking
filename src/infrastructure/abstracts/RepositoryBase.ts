// import { MainRepository } from 'typeorm-simple-query-parser';

import { ObjectLiteral, Repository } from "typeorm";
import { EntityBase } from "./EntityBase";

export abstract class RepositoryBase<T extends EntityBase> {
    repository: Repository<T>
}
