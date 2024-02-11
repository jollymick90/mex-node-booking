// days.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity({ name: 'extras' })
@Unique(['code'])
export class Extra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  price: number;
}
