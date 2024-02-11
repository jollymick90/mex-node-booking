import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany, JoinColumn } from 'typeorm';
import { Truck } from './Truck';
import { Day } from './Day';
import { Site } from './Site';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';

@Entity({ name: 'truck_calendars' })
export class TruckCalendars extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  start_at: string;

  @Column({ nullable: true })
  end_at: string;

  @ManyToOne(() => Truck, truck => truck.truckCalendars)
  @JoinColumn({ name: 'truck_id' })
  truck: Truck;


  @ManyToOne(() => Day, day => day.truckCalendars)
  @JoinColumn({ name: 'day_id' })
  day: Day;

  @ManyToOne(() => Site, site => site.truckCalendars)
  @JoinColumn({ name: 'site_id' })
  site: Site;


}
