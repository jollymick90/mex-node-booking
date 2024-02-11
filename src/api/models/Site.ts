import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { TruckCalendars } from './TruckCalendars';

@Entity({ name: 'sites' })
@Unique(['code'])
export class Site extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @OneToMany(() => TruckCalendars, truckCalendar => truckCalendar.trucks)
  truckCalendars: TruckCalendars[];
}
