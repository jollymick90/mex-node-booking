import { LookUpEntityBase } from '@base/infrastructure/abstracts/LookUpEntityBase';
import { Entity, Column, Unique } from 'typeorm';

@Entity({ name: 'extras' })
@Unique(['code'])
export class Extra extends LookUpEntityBase {

  @Column()
  price: number;
}
