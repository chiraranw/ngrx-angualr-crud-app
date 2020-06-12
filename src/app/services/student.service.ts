import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class StudentService {

    public students: Student[] = [];
    constructor(private http: HttpClient) { }

    public getStudents(): Observable<Student[]> {
        console.log("Service Called");
        return this.http.get<Student[]>("http://localhost:3000/students");
    }

    public create(payload: Student): Observable<Student> {
        return this.http.post<Student>("http://localhost:3000/students/", payload);
    }

    public delete(id: number) {
        console.log("Deleting Student with ID:", id);
        return this.http.delete("http://localhost:3000/students/" + id);
    }

    public getStudentById(id: number): Observable<Student> {
        console.log("getting student id", id);
        return this.http.get<Student>("http://localhost:3000/students/" + id);
    }

    public update(student: Student) {
        console.log("Updating...");
        return this.http.patch("http://localhost:3000/students/" + student.id, student);
    }
}