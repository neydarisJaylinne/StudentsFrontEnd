import { Component } from '@angular/core';
import { StudentGrade } from '../../models/StudentGrade';
import { AlumnogradeService } from '../../services/alumnograde.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { GradeService } from '../../services/grade.service';

@Component({
  selector: 'app-alumnogrades',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './alumnogrades.component.html',
  styleUrl: './alumnogrades.component.css'
})
export class AlumnogradesComponent {

  studentGrades: any[] = [];
  students: any[] = [];
  grades: any[] = [];
  newStudentGrade = {
    studentId: 0,
    gradeId: 0,
    section: '',
  };

  constructor(
    private studentGradeService: AlumnogradeService,
    private studentService: StudentService,
    private gradeService: GradeService
  ) { }

  ngOnInit(): void {
    this.getStudentGrades();
    this.getStudents();
    this.getGrades();
  }

  getStudentGrades() {
    this.studentGradeService.getStudentGrades().subscribe((data) => {
      this.studentGrades = data;
    });
  }

  getStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  getGrades() {
    this.gradeService.getGrades().subscribe((data) => {
      this.grades = data;
    });
  }

  addStudentGrade() {
    if (this.newStudentGrade.studentId && this.newStudentGrade.gradeId && this.newStudentGrade.section) {
      this.studentGradeService.createStudentGrade(this.newStudentGrade).subscribe(() => {
        alert('Relación alumno-grado creada exitosamente');
        this.getStudentGrades();
        this.newStudentGrade = { studentId: 0, gradeId: 0, section: '' };
      });
    } else {
      alert('Por favor complete todos los campos');
    }
  }

  deleteStudentGrade(id: number) {
    if (confirm('¿Estás seguro de eliminar esta relación?')) {
      this.studentGradeService.deleteStudentGrade(id).subscribe(() => {
        alert('Relación eliminada exitosamente');
        this.getStudentGrades();
      });
    }
  }
}
