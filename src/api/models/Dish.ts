import { Entity, PrimaryGeneratedColumn, Column, Unique, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { OrdersItems } from './OrderItems';
import { DishTag } from './DishTags';
import { DishCategory } from './DishCategories';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { Category } from './Category';
import { Tag } from './Tag';
import { LookUpEntityBase } from '@base/infrastructure/abstracts/LookUpEntityBase';

@Entity({ name: 'dishes' })
@Unique(['code'])
export class Dish extends LookUpEntityBase {

  @Column()
  description: string;

  @Column()
  note: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  price: number;

  // @OneToMany(() => OrdersItems, ordersItem => ordersItem.dish)
  // ordersItems: OrdersItems[];

  @ManyToMany((type) => Category)
  @JoinTable({
    name: "dishes_categories",
    synchronize: false,
    joinColumn: {
      name: "category_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "dish_id",
      referencedColumnName: "id",
    }
  })
  categories: Category[];

  @ManyToMany((type) => Tag)
  @JoinTable({
    name: "dishes_tags",
    synchronize: false,
    joinColumn: {
      name: "tag_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "dish_id",
      referencedColumnName: "id",
    }
  })
  tags: Tag[];
}
