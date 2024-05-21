import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});
