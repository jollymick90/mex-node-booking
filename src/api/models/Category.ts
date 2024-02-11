import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';

@Entity({ name: 'categories' })
@Unique(['code'])
export class Category extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  // @OneToMany(() => Dish, dish => dish.categories)
  // dishes: Dish[]
}
