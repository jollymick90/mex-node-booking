import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany, ManyToOne } from 'typeorm';
import { TruckCalendars } from './TruckCalendars';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';

@Entity({ name: 'trucks' })
@Unique(['code'])
export class Truck extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  note: string;

  @OneToMany(() => TruckCalendars, truckCalendar => truckCalendar.trucks)
  truckCalendars: TruckCalendars[];

  // @OneToMany(() => UsersTrucks, userTruck => userTruck.truck)
  // usersTrucks: UsersTrucks[];

  // @OneToMany(() => Orders, order => order.truck)
  // orders: Orders[];

  
  
}
