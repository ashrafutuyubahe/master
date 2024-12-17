import {
  
    IsEmail,  
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';
  
  export class CreateUserDto {

    @IsString()
    @MinLength(2, { message: 'Name must have atLeast 2 characters.' })
    @IsNotEmpty()
    id:number;

    @IsString()
    @MinLength(2, { message: 'Name must have atLeast 2 characters.' })
    @IsNotEmpty()
    userName: string;
  
    @IsNotEmpty()
    @IsEmail(null, { message: 'Please provide valid Email.' })
    userEmail: string;
  
    userPassword: string;
  }