
export class Product {
productId:string;
  productName: string;
  productPrice: number;
  productLocation: string;
  productOwner: string;

  constructor(prodId:string,prodName:string,prodPrice:number,prodOwner:string,prodLoc:string){
  this.productId=prodId
  this.productLocation=prodLoc;
  this.productName=prodName;
  this.productOwner=prodOwner;
  this.productPrice=prodPrice;
  }

  

}
