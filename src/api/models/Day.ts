import { Entity, Column, Unique, OneToMany } from 'typeorm';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { TruckCalendars } from '@api/models/TruckCalendars';

@Entity({ name: 'days' })
@Unique(['code'])
export class Day extends EntityBase {

  @Column()
  code: string;

  @Column()
  name: string;

  @Column({ name: 'day_of_week'})
  dayOfWeek: number;

  @Column({ name: 'holiday'})
  holiday: Date;

  @Column({ name: 'custom_day'})
  customDay: Date;

  @OneToMany(() => TruckCalendars, truckCalendar => truckCalendar.truck)
  truckCalendars: TruckCalendars[];
}
