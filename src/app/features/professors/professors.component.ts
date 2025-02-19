import { Component } from '@angular/core';
import { Teacher } from '../../models/Teacher';
import { ProfessorService } from '../../services/professor.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-professors',
  standalone: true,
  imports:[CommonModule, RouterModule, FormsModule],
  templateUrl: './professors.component.html',
  styleUrl: './professors.component.css'
})
export class ProfessorsComponent {
  teachers: Teacher[] = [];
  selectedTeacher: Teacher | null = null;

  constructor(private teacherService: ProfessorService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }


  viewTeacher(id: number) {
    this.teacherService.getTeachersById(id).subscribe((teacher) => {
      alert(teacher);
    });
  }

  loadTeachers() {
    this.teacherService.getTeachers().subscribe((data) => {
      this.teachers = data;
    });
  }

  addTeacher(teacher: Teacher) {
    this.teacherService.createTeachers(teacher).subscribe(() => {
      this.loadTeachers();
    });
  }

  updateTeacher() {
    if (this.selectedTeacher) {
      this.teacherService.updateTeachers(this.selectedTeacher.id, this.selectedTeacher).subscribe(() => {
        this.loadTeachers();
        this.cancelEdit();
      });
    }
  }

  editTeacher(teacher: Teacher) {
    this.selectedTeacher = { ...teacher }; 
  }

  cancelEdit() {
    this.selectedTeacher = null;
  }

  deleteTeacher(id: number) {
    this.teacherService.deleteTeachers(id).subscribe(() => {
      this.loadTeachers();
    });
  }
}
