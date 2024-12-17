import { Injectable,HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { users } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(users) private readonly userRepository: Repository<users>,
  ) {}
  create(CreateUserDto: CreateUserDto): Promise<users> {
    const userInstance: users = new users();
    userInstance.userName = CreateUserDto.userName;
    userInstance.userPassword = CreateUserDto.userPassword;
    userInstance.userEmail = CreateUserDto.userEmail;
    userInstance.id = CreateUserDto.id;

    return this.userRepository.save(userInstance);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const findUser = await this.userRepository.findOneBy({ id });
    return `The  user  with this id is ${findUser.userName}`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.userRepository.findOneBy({ id });
    if (!existingUser) {
      throw new HttpException('the user is not found',HttpStatus.NOT_FOUND);
    }

    existingUser.userEmail = updateUserDto.userEmail;
    existingUser.userName = updateUserDto.userName;
    existingUser.userPassword = updateUserDto.userPassword;

    const saveUser = await this.userRepository.save(existingUser);
    if (!saveUser) {
      throw new HttpException('failed to update user',HttpStatus.BAD_REQUEST);
    }

    return 'user updated successfully';
  }

  removeUser(id:number){

    this.userRepository.delete(id);    
  return `the user with id ${id} is deleted`


  }

  
}
