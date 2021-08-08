import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../_db/db';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
})
export class UserModule {}
