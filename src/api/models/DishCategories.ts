import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Orders } from './Order';
import { Dish } from './Dish';


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
