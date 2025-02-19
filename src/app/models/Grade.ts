import { Teacher } from "./Teacher";

export interface Grade {
    id: number;
    name: string;
    teacherId: number;
    teacher: Teacher;
}