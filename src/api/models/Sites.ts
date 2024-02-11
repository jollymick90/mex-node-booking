// days.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import { Truck } from './Trucks';
import { TruckCalendars } from './TruckCalendars';

@Entity({ name: 'sites' })
@Unique(['code'])
export class Site {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  address: string;

  // @OneToMany(() => TruckCalendars, truckCalendar => truckCalendar.site)
  // truckCalendars: TruckCalendars[];
}
