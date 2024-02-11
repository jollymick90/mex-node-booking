import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';

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

  // @OneToMany(() => TruckCalendars, truckCalendar => truckCalendar.site)
  // truckCalendars: TruckCalendars[];
}
