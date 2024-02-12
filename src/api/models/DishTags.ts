import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Orders } from './Order';
import { Dish } from './Dish';
import { Tag } from './Tag';


@Entity({ name: 'dishes_tags' })
export class DishTag {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Dish, dish => dish.t
  // dish: Dish;

  // @ManyToOne(() => Tags, tag => tag.)
  // tag: Tags;
}
