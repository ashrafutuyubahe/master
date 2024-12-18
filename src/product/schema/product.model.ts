import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('product')
export class Product {

  @PrimaryGeneratedColumn()
productId:number;

@Column()
  productName: string;
  @Column()
  productPrice: number;
  @Column()
  productLocation: string;

  @Column()
  productOwner: string;

  constructor(prodName:string,prodPrice:number,prodOwner:string,prodLoc:string){
  
  this.productLocation=prodLoc;
  this.productName=prodName;
  this.productOwner=prodOwner;
  this.productPrice=prodPrice;
  }

  

}
