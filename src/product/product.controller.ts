import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ProductService } from './product.service';


@Controller('e-comerce_api/v1')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('addProduct')
  addProduct(
    @Body('prodName') productName: string,
    @Body('prodPrice') productPrice: number,
    @Body('prodLoc') productLoc: string,
    @Body('prodOwner') productOwner: string,
  ) {
    return this.productService.createProduct(
      productName,
      productPrice,
      productOwner,
      productLoc,
    );
  }



  @Get('getProducts')
  getProducts() {
    return this.productService.getAllProduct();
  }




  @Delete('deleteProduct/:prodId')
  removeProduct(@Param('prodId') productId: string) {
    return this.productService.deleteProduct(productId);
  }

  @Put('updateProduct/:prodId')
  async updateProduct(
    @Param('prodId') productId: string,
    @Body('prodName') productName: string,
    @Body('prodPrice') productPrice: number,
    @Body('prodLoc') productLoc: string,
    @Body('prodOwner') productOwner: string

  ) {
    return this.productService.changeProduct(productName,productPrice,productLoc,productOwner,productId);
 
  }
}
