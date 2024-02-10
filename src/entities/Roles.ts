import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { User } from './User';

@Entity({ name: 'roles' })
export class Role extends EntityBase {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @OneToMany(() => User, user => user.role)
  users: User[];

  
}
