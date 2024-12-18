import { Body, Injectable, NotFoundException, Put } from '@nestjs/common';
import { Product } from './schema/product.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  
  constructor(
    @InjectRepository(Product)
    private readonly productRepository:Repository<Product>
  ){}

  // productArray: Product[] = [
  //   {
  //     productId:1,
  //     productLocation: 'kalisa',
  //     productName: 'car',
  //     productOwner: 'huye',
  //     productPrice: 10000,
  //   },
  //   {
  //     productId:3,
  //     productLocation: 'kamana',
  //     productName: 'house',
  //     productOwner: 'nyanza',
  //     productPrice: 1000,
  //   },
  // ];

  async createProduct(
    productName: string,
    productPrice: number,
    productLoc: string,
    productOwner: string,
  ) {
   

    const newProduct = new Product(
      productName,
      productPrice,
      productOwner,
      productLoc,
    );

    const productExists= await this.productRepository.findOne({
      where:{productName,productOwner,productPrice}
    });

    if(productExists){
      return {message:"product already exists"}
    }


    
    
   this.productRepository.create(newProduct);
  const savePrduct=  await this.productRepository.save(newProduct);

  if(savePrduct){
    return {message:"product saved succesfuly"}
  }

  return {message:"failed to  save product"}
   
  
  
  }

  async getAllProduct() {
    return this.productRepository.find();

  }






  async deleteProduct(productId: number) {

    const productExists= await this.productRepository.findOne({ where:{productId}})

    if(!productExists){
      throw new NotFoundException("no such product found");
    }

const deleteProduct= await this.productRepository.delete(productId);

   if( deleteProduct.affected>0){
    return  {message:"product deleted successful"}
   }

   return  {message:"failed to delete product."}
   
  }


  async changeProduct(
    productName: string,
    productPrice: number,
    productLoc: string,
    productOwner: string,
    productId: number
  ) {
   
    const productExists= await this.productRepository.findOne({ where:{productId}})

    if(!productExists){
      throw new NotFoundException("no such product found");
    }


    const updatedProduct = new Product(
      productName,
      productPrice,
      productOwner,
      productLoc,
    );


    const updateProduct= await this.productRepository.update(productId,updatedProduct);

    if(updateProduct.affected){
      return {message:"product updated successfully"}
    }
    return {message:" failed to update the product"}

  }
  



}

