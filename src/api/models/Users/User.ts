import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { HashService } from '@base/infrastructure/services/hash/HashService';

import { Role } from './Role';

@Entity({ name: 'users' })
export class User extends EntityBase {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: "email" })
  email: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "telephone" })
  telephone: string;

  @Column({ name: "password" })
  @Exclude()
  password: string;

  @Column({ name: "role_id" })
  roleId: number;

  @OneToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @BeforeInsert()
  @BeforeUpdate()
  async setPassword() {
    if (this.password) this.password = await new HashService().make(this.password);
  }

  @BeforeInsert()
  async setDefaultRole() {
    const roleId = this.roleId ? this.roleId : 1;

    this.roleId = roleId;
  }

  // @OneToMany(() => Orders, order => order.user)
  // orders: Orders[];

  // @ManyToOne(() => Role, role => role.users)
  // @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  // role: Role;
}
