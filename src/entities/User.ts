import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import { Exclude, Expose } from 'class-transformer';
import { Role } from "./Role";
import { HashService } from '@base/infrastructure/services/hash/HashService';

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({name: "email"})
    email: string;

    @Column({name: "name"})
    name: string;

    @Column({name: "telephone"})
    telephone: string;

    @Column({name: "password"})
    @Exclude()
    password: string;

    @Column({name: "role_id"})
    roleId: number;

    @OneToOne(() => Role)
    @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
    role: Role;

    @BeforeInsert()
    @BeforeUpdate()
    async setPassword() {
      if (this.password) this.password = await new HashService().make(this.password);
    }
  
    // @BeforeInsert()
    // async setDefaultRole() {
    //   const roleId = this.roleId ? this.roleId : 2;
  
    //   this.roleId = roleId;
    // }
}
