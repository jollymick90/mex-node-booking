import { Entity, Column, Unique, OneToMany } from 'typeorm';
import { TruckCalendars } from './TruckCalendars';
import { LookUpEntityBase } from '@base/infrastructure/abstracts/LookUpEntityBase';

@Entity({ name: 'sites' })
@Unique(['code'])
export class Site extends LookUpEntityBase {

  @Column()
  address: string;

  @OneToMany(() => TruckCalendars, truckCalendar => truckCalendar.truck)
  truckCalendars: TruckCalendars[];
}
