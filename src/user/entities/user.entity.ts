import {Column,PrimaryGeneratedColumn,Entity } from "typeorm";
@Entity()
export class User {
@PrimaryGeneratedColumn()
id:number;
@Column({type:'varchar',length:30})
userName:string;
@Column({type:'varchar',length:30})
userPassword:string;
@Column({type:'varchar',length:30})
userEmail:string;

 
}
