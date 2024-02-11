import { Entity, PrimaryGeneratedColumn, Column, Unique, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { OrdersItems } from './OrderItems';
import { DishTag } from './DishTags';
import { DishCategory } from './DishesCategories';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';

@Entity({ name: 'dishes' })
@Unique(['code'])
export class Dish extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  note: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  price: number;

  // @OneToMany(() => OrdersItems, ordersItem => ordersItem.dish)
  // ordersItems: OrdersItems[];

  // @ManyToMany(() => DishCategory)
  // @JoinTable()
  // categories: DishCategory[];

  // @ManyToMany(() => DishTag)
  // @JoinTable()
  // tags: DishTag[];
}
