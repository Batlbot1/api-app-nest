import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    return {
      statusCode: 201,
      token: user.token,
    };
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    console.log('id:' + id);
    return await this.userRepository.findOneBy({
      id,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.create(updateUserDto);
    return await this.userRepository.update(id, user);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
