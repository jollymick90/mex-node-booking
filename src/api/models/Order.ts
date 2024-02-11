// orders.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Truck } from './Truck';
import { StateOrder } from './StateOrder';
import { OrdersItems } from './OrderItems';


@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modify_at: Date;

  // @ManyToOne(() => User, user => user.orders)
  // user: User;

  // @ManyToOne(() => Truck, truck => truck.orders)
  // truck: Truck;

  // @ManyToOne(() => StateOrder, stateOrder => stateOrder.orders)
  // stateOrder: StateOrder;

  // @OneToMany(() => OrdersItems, ordersItem => ordersItem.order)
  // ordersItems: OrdersItems[];
}
