type StateT = "todo" | "done" | "deleted";
export class ToDoModel {
    id: string;
    state: StateT;
    title: string;
    text: string;
};

export class UpdateParamsT {
    id: string;
    state: StateT;
};