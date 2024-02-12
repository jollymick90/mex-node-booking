import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { LookUpEntityBase } from '@base/infrastructure/abstracts/LookUpEntityBase';

@Entity({ name: 'categories' })
@Unique(['code'])
export class Category extends LookUpEntityBase {


  // @OneToMany(() => Dish, dish => dish.categories)
  // dishes: Dish[]
}
