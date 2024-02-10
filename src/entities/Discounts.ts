// days.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity({ name: 'discounts' })
@Unique(['code'])
export class Discounts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  value: number;

  @Column()
  percentage: number;
}
