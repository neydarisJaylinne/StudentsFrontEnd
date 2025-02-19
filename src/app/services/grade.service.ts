import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from '../models/Grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private apiUrl = 'https://localhost:7237/api/Grade';

  constructor(private http: HttpClient) { }

  getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.apiUrl);
  }

  getGradesById(id: number):  Observable<Grade>{
    return this.http.get<Grade>(`${this.apiUrl}/${id}`)
  }

  createGrade(grade: Grade): Observable<Grade> {
    return this.http.post<Grade>(this.apiUrl, grade);
  }

  updateGrade(id: number, grade: Grade): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, grade);
  }

  deleteGrade(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
