import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  /*
 GET/users
 GET/users/:id
 POST/users
 */
  @Get() //GET /users or users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id') //GET /user/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() //POST /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.create(user);
  }
  @Patch(':id') //PATCH /user/:id
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //DElETE /user/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
