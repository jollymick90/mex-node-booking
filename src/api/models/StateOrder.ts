import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import { Orders } from './Order';

@Entity({ name: 'state_orders' })
@Unique(['code'])
export class StateOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  // @OneToMany(() => Orders, orders => orders.stateOrder)
  // orders: Orders[]

}
