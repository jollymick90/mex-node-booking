import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Orders } from './Orders';
import { Dish } from './Dishes';


@Entity({ name: 'dishes_categories' })
export class DishCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  note: string;
  // @ManyToOne(() => Orders, order => order.ordersItems)
  // order: Orders;

  // @ManyToOne(() => Dish, dish => dish.ordersItems)
  // dish: Dish;


}
