import { Dish } from "@base/api/models";
import { IRepository } from "@base/infrastructure/abstracts/IRepository";

export interface IDishRepository extends IRepository<Dish> {
  findAllFull(): Dish[] | PromiseLike<Dish[]>;

}