import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) {

    }

    @Get()
    gettodo() {
        return this.todoService.getTodo()
    }

    @Post()
    posttodos(@Body("name") name: string, @Body("LastName") LastName: string, @Body("phonenumber") phonenumber: string, @Body("address") address: string) {
        this.todoService.addTodo(name, LastName,phonenumber,address)
    }

    @Delete("/:id")
    deleteTodoById(@Param("id") id: string) {
        console.log(`id:${id}`)
        return  this.todoService.removeTodoById(id)
    }

}
