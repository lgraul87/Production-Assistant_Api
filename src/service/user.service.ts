import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { User, UserDocument } from '../_db/db';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}
  
 async create(createUserDto: CreateUserDto): Promise<User> {
  return await new this.model({
    ...createUserDto,
  }).save();
}
 
  async findAll(): Promise<User[]>{
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.model.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto):Promise<User> {
    return await this.model.findOneAndUpdate(updateUserDto);
  }

  async remove(id: string):Promise<User> {
    return await this.model.findOneAndDelete();
  }
}
