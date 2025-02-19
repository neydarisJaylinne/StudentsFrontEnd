import { Grade } from "./Grade";
import { Student } from "./Student";

export interface StudentGrade {
    id: number;
    studentId: number;
    student: Student;
    gradeId: number;
    grade: Grade;
    section: string;
}