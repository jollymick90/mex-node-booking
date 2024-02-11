import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Orders } from './Orders';
import { Dish } from './Dishes';
import { Tags } from './Tags';


@Entity({ name: 'dishes_tags' })
export class DishTag {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Dish, dish => dish.t
  // dish: Dish;

  // @ManyToOne(() => Tags, tag => tag.)
  // tag: Tags;
}
