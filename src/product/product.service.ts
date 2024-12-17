import { Injectable } from "@nestjs/common";
import { Product } from "./schema/product.model";



@Injectable()
export class ProductService{

 productArray:Product[]=[
    {
        "productId": "Tue Dec 17 2024 11:31:38 GMT+0200 (Central Africa Time)",
        "productLocation": "kalisa",
        "productName": "car",
        "productOwner": "huye",
        "productPrice": 10000
    },
    {
        "productId": "Tue Dec 17 2024 11:37:38 GMT+0200 (Central Africa Time)",
        "productLocation": "kamana",
        "productName": "house",
        "productOwner": "nyanza",
        "productPrice": 1000
    }
 ];




async  createProduct( 
    productName:string,
    productPrice:number,
    productLoc:string,
    productOwner:string
){

    const prodId=  Date();
    
 const  newProduct= new Product(prodId,productName,productPrice,productOwner,productLoc);
 this.productArray.push(newProduct);
     return{message: "product created successfully",productArray:this.productArray};
     
  }


  async getAllProduct(){
    return this.productArray;
  }

  async deleteProduct(productId:string){

  const  productIndex= this.productArray.findIndex((product)=>{

     product.productId=productId
    })

    if(productIndex ==-1){
        return "product not found";
    }

    this.productArray.splice(productIndex,1);

    return {message:"product deleted sucessfully",newProducts:this.productArray}

    
    }

  }








 


