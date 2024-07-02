import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';

@Injectable()
export class UserService {
  constructor( @InjectRepository(User) private readonly   userRepository:Repository<User> ){

  }
  create(CreateUserDto: CreateUserDto):Promise<User> {
    const userInstance:User = new User();
      userInstance.userName = CreateUserDto.userName;
      userInstance.userPassword = CreateUserDto.userPassword;  
      userInstance.userEmail = CreateUserDto.userEmail;

  return  this.userRepository.save(userInstance);
   
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
