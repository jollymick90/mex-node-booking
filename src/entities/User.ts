import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate, OneToMany, ManyToOne } from "typeorm";
import { Exclude, Expose } from 'class-transformer';
import { Role } from "./Roles";
import { HashService } from '@base/infrastructure/services/hash/HashService';
import { Orders } from "./Orders";

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

    @ManyToOne(() => Role, role => role.users)
    @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
    role: Role;

    @BeforeInsert()
    @BeforeUpdate()
    async setPassword() {
      if (this.password) this.password = await new HashService().make(this.password);
    }
  

    @OneToMany(() => Orders, order => order.user)
    orders: Orders[];
  
    // @OneToMany(() => UsersTrucks, userTruck => userTruck.user)
    // userTrucks: UsersTrucks[];
    // @BeforeInsert()
    // async setDefaultRole() {
    //   const roleId = this.roleId ? this.roleId : 2;
  
    //   this.roleId = roleId;
    // }
}
