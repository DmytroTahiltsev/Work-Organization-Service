

export enum TodoStatusEnum {
    APPOINTED = "APPOINTED",
    IN_PROCCESING = "IN PROCCESING",
    DONE = "DONE"
}
export type TodoStatus = TodoStatusEnum.APPOINTED | TodoStatusEnum.IN_PROCCESING | TodoStatusEnum.DONE
export interface ITodo {
    id: number;
    autor: string;
    executor: string;
    title: string;
    description: string;
    status: TodoStatus;
}