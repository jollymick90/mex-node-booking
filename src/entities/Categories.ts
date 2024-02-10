// days.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import { Dish } from './Dishes';

@Entity({ name: 'categories' })
@Unique(['code'])
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @OneToMany(() => Dish, dish => dish.categories)
  dishes: Dish[]
}
