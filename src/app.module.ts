import { Module } from '@nestjs/common';
import { BooksController } from './new_src/books/books.controller';
import { BookManipulateService } from './new_src/book-manipulate/book-manipulate.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './new_src/user/user.module';
import { AuthModule } from './auth/auth.module';
import { NewSrcModule } from './new_src/new_src.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '',
      database: 'first_nest_app',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    NewSrcModule
  ],
  controllers: [BooksController],
  providers: [BookManipulateService],
})
export class AppModule {}
