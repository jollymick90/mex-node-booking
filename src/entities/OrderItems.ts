// orders-items.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Orders } from './Orders';
import { Dish } from './Dishes';


@Entity({ name: 'orders_items' })
export class OrdersItems {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Orders, order => order.ordersItems)
  order: Orders;

  @ManyToOne(() => Dish, dish => dish.ordersItems)
  dish: Dish;

  @Column({ nullable: true })
  note: string;
}
