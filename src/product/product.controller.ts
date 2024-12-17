import { Body, Controller, Get, Post } from "@nestjs/common";
import { Product } from "./schema/product.model";
import { ProductService } from "./product.service";
import { get } from "http";




@Controller("e-comerce_api/v1")
export class ProductController{
constructor(private readonly productService:ProductService){}


@Post("addProduct") 
 addProduct(
 @Body('prodName') productName:string,
@Body('prodPrice') productPrice:number,
@Body("prodLoc") productLoc:string,
@Body('prodOwner') productOwner:string

){

    return this.productService.createProduct(productName,productPrice,productOwner,productLoc);


 }


 @Get('getProducts')
 getProducts(){
  return this.productService.getAllProduct();

 }

 


}