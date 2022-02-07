import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ToDoData } from '../../mocked-data';
import { ToDoModel } from './todo.model';
import { ToDoGuard } from './todo.guard';

@Controller('todo')
export class TodoController {
    localData = ToDoData;
    logData = () => {
        console.log(this.localData);
    };

    @Get()
    getTodos(): Array<ToDoModel> {
        return this.localData;
    }

    @UseGuards(ToDoGuard)
    @Put(":id")
    updateToDo(@Param("id") id, @Body() toDoBody: ToDoModel): ToDoModel {
        const updatedArray = this.localData.map(toDo => {
            if(toDo.id === id){
                return toDo = {...toDo, ...toDoBody};
            }
            return toDo;
        });
        this.localData = updatedArray;
        this.logData();
        return this.localData.find(toDo => toDo.id === id);
    }

    @UseGuards(ToDoGuard)
    @Post()
    createToDo(@Body() toDoBody: {title: string, text: string}): ToDoModel {
        const newTodo: ToDoModel = {
            id: randomUUID(),
            state: "todo",
            ...toDoBody
        };
        this.localData.push(newTodo);
        this.logData();
        return newTodo;
    }

    @UseGuards(ToDoGuard)
    @Delete(":id")
    deleteToDo(@Param("id") id): ToDoModel | string {
        const deletedToDo = this.localData.find(todo => todo.id === id);
        if(deletedToDo) {
            this.localData = this.localData.filter(todo => todo.id !== id);
            this.logData();
            deletedToDo.state = "deleted";
            return deletedToDo;
        }
        return "To do does not exist!";
    }
}
