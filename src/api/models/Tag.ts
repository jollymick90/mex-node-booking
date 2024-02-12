import { LookUpEntityBase } from '@base/infrastructure/abstracts/LookUpEntityBase';
import { Entity, Unique } from 'typeorm';

@Entity({ name: 'tags' })
@Unique(['code'])
export class Tag extends LookUpEntityBase {

}
