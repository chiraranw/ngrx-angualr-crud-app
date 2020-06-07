import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';
import { Injectable } from '@angular/core';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class StudentService {

    public students:Student[]=[];
    constructor(private http: HttpClient) { }

    public getStudents(): Observable<Student[]> {
        console.log("Service Called");        
        return this.http.get<Student[]>("http://localhost:3000/students");
    }
}