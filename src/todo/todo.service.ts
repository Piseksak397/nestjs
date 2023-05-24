import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';

import { uuid } from "uuidv4";

@Injectable()
export class TodoService {

    todoArray: Todo[] = []

    addTodo(name: string, LastName: string,phonenumber:string,address:string) {
        console.log(`name: ${name}, LastName: ${LastName}, phonenumber: ${phonenumber}, address: ${address}`)
        const todo = new Todo();
        todo.id = uuid();
        todo.name = name;
        todo.LastName = LastName;
        todo.phonenumber = phonenumber;
        todo.address = address;
        this.todoArray.push(todo)
    }
    getTodo() {
        return this.todoArray
    }

    removeTodoById(id: string) {
        const found = this.todoArray.find(item => item.id === id)
        if (!found) {
            throw new NotFoundException('Todo with ${id} not found')
        }

        this.todoArray = this.todoArray.filter(item => { return item.id !== id })
        return this.todoArray

    }

}
