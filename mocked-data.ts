import { randomUUID } from "crypto";
import { ToDoModel } from "src/todo/todo.model";

const toDo1: ToDoModel = {
    id: randomUUID(),
    state: "done",
    title: "To Do Task 1",
    text: "This task has been done"
};
const toDo2: ToDoModel = {
    id: randomUUID(),
    state: "deleted",
    title: "To Do Task 2",
    text: "This task has been deleted"
};
const toDo3: ToDoModel = {
    id: randomUUID(),
    state: "todo",
    title: "To Do Task 3",
    text: "This task has yet to be done"
};
const toDo4: ToDoModel = {
    id: randomUUID(),
    state: "done",
    title: "To Do Task 4",
    text: "This task has been done"
};
const toDo5: ToDoModel = {
    id: randomUUID(),
    state: "todo",
    title: "To Do Task 5",
    text: "This task has yet to been done"
};
export const ToDoData: Array<ToDoModel> = [toDo1, toDo2, toDo3, toDo4, toDo5];