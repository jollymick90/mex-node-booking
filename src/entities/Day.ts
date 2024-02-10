// days.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import { TruckCalendars } from './TruckCalendars';

@Entity({ name: 'day' })
@Unique(['code'])
export class Day {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @OneToMany(() => TruckCalendars, truckCalendar => truckCalendar.day)
  truckCalendars: TruckCalendars[];
}
