import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports:[CommonModule, RouterModule, FormsModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | null = null;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  deleteAlert(){
   document.getElementById("deleteDiv")!.style.visibility = "visible";
  }

  loadStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  addStudent(student: Student) {
    console.log(student.gender);
    this.studentService.createStudent(student).subscribe(() => {
      this.loadStudents();
    });
  }

  updateStudent() {
    if (this.selectedStudent) {
      this.studentService.updateStudent(this.selectedStudent.id, this.selectedStudent).subscribe(() => {
        this.loadStudents();
        this.cancelEdit();
      });
    }
  }

  editStudent(student: Student) {
    this.selectedStudent = { ...student }; 
  }

  cancelEdit() {
    this.selectedStudent = null;
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }
}
