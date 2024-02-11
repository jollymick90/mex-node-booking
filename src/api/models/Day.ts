import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';

@Entity({ name: 'day' })
@Unique(['code'])
export class Day extends EntityBase {
  // @PrimaryGeneratedColumn()
  // id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  // @OneToMany(() => TruckCalendars, truckCalendar => truckCalendar.day)
  // truckCalendars: TruckCalendars[];
}
