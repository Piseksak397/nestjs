import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { get } from 'http';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {




}
