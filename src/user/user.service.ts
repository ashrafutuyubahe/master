import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { users } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
  constructor( @InjectRepository(users) private readonly   userRepository:Repository<users> ){

  }
  create(CreateUserDto: CreateUserDto):Promise<users> {
    const userInstance:users = new users();
      userInstance.userName = CreateUserDto.userName;
      userInstance.userPassword = CreateUserDto.userPassword;  
      userInstance.userEmail = CreateUserDto.userEmail;
      userInstance.id = CreateUserDto.id;


  return  this.userRepository.save(userInstance);
   
  }

  findAll() {
  
  return this.userRepository.find();


  }

  findOne(id: number) {
    return `The  user  with this id is ${this.userRepository.findOneBy({id})}`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
        const updateInstance= new users;
        updateInstance.userName= updateUserDto.userName;
        updateInstance.userEmail= updateUserDto.userEmail;
        updateInstance.userPassword= updateUserDto.userPassword
       return this.userRepository.save(updateInstance);

  }

  remove(id: number) {
   this.userRepository.delete(id);  
  }
}
