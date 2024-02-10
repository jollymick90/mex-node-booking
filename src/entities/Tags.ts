// days.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity({ name: 'tags' })
@Unique(['code'])
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;
}
