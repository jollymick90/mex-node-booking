import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity({ name: 'discounts' })
@Unique(['code'])
export class Discounts extends EntityBase {
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
