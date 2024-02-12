import { Entity, Column, Unique, OneToMany } from 'typeorm';
import { TruckCalendars } from './TruckCalendars';
import { LookUpEntityBase } from '@base/infrastructure/abstracts/LookUpEntityBase';

@Entity({ name: 'trucks' })
@Unique(['code'])
export class Truck extends LookUpEntityBase {

  @Column()
  note: string;

  @OneToMany(() => TruckCalendars, truckCalendar => truckCalendar.truck)
  truckCalendars: TruckCalendars[];

  // @OneToMany(() => UsersTrucks, userTruck => userTruck.truck)
  // usersTrucks: UsersTrucks[];

  // @OneToMany(() => Orders, order => order.truck)
  // orders: Orders[];

  
  
}
