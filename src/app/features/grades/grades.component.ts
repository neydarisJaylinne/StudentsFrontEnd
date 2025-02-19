import { Component } from '@angular/core';
import { Grade } from '../../models/Grade';
import { GradeService } from '../../services/grade.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent {

  grades: Grade[] = [];
  selectedGrade: Grade | null = null;
  _selectedGrade = { id: 0, professorId: 0 };

  constructor(private gradeService: GradeService) {}

  ngOnInit(): void {
    this.loadgrades();
  }

  viewGrade(id: number) {
    this.gradeService.getGradesById(id).subscribe((grade) => {
      alert(grade);
    });
  }
  loadgrades() {
    this.gradeService.getGrades().subscribe((data) => {
      this.grades = data;
    });
  }

  addGrade(grade: Grade) {
    this.gradeService.createGrade(grade).subscribe(() => {
      this.loadgrades();
    });
  }

  updateGrade() {
    if (this.selectedGrade) {
      this.gradeService.updateGrade(this.selectedGrade.id, this.selectedGrade).subscribe(() => {
        this.loadgrades();
        this.cancelEdit();
      });
    }
  }

  editGrade(grade: Grade) {
    this.selectedGrade = { ...grade }; 
  }

  cancelEdit() {
    this.selectedGrade = null;
  }

  deleteGrade(id: number) {
    this.gradeService.deleteGrade(id).subscribe(() => {
      this.loadgrades();
    });
  }
}
