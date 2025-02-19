import { Routes } from '@angular/router';
import { StudentsComponent } from './features/students/students.component';
import { ProfessorsComponent } from './features/professors/professors.component';
import { GradesComponent } from './features/grades/grades.component';
import { AlumnogradesComponent } from './features/alumnogrades/alumnogrades.component';

export const routes: Routes = [
    {
        path: 'students',
        component: StudentsComponent
    },
    {
        path: 'teachers',
        component: ProfessorsComponent
    },
    {
        path: 'grades',
        component: GradesComponent
    },
    {
        path: 'studentGrade',
        component: AlumnogradesComponent
    },

];
