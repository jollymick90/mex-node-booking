import { Entity, Column, Unique, OneToMany } from 'typeorm';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { TruckCalendars } from '@api/models/TruckCalendars';
import { LookUpEntityBase } from '@base/infrastructure/abstracts/LookUpEntityBase';

@Entity({ name: 'days' })
@Unique(['code'])
export class Day extends LookUpEntityBase {

  @Column({ name: 'day_of_week'})
  dayOfWeek: number;

  @Column({ name: 'holiday'})
  holiday: Date;

  @Column({ name: 'custom_day'})
  customDay: Date;

  @OneToMany(() => TruckCalendars, truckCalendar => truckCalendar.truck)
  truckCalendars: TruckCalendars[];
}
