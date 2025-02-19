import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentGrade } from '../models/StudentGrade';

@Injectable({
  providedIn: 'root'
})
export class AlumnogradeService {

  private apiUrl = 'https://localhost:7237/api/StudentsGrade';

  constructor(private http: HttpClient) {}

  getStudentGrades(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createStudentGrade(studentGrade: any): Observable<any> {
    return this.http.post(this.apiUrl, studentGrade);
  }

  deleteStudentGrade(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
