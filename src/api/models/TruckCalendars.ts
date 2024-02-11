import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Truck } from './Truck';
import { Day } from './Day';
import { Site } from './Site';

@Entity()
export class TruckCalendars {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Truck, truck => truck.truckCalendars)
  // truck: Truck;

  // @ManyToOne(() => Day, day => day.truckCalendars)
  // day: Day;

  // @ManyToOne(() => Site, site => site.truckCalendars)
  // site: Site;

  @Column({ nullable: true })
  start_at: string;

  @Column({ nullable: true })
  end_at: string;
}
