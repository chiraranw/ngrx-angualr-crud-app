import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { tap } from 'rxjs/operators';
import { Student } from './model/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-ngrx-app';
  public students:Student[]=[]
  constructor(private studentApi:StudentService){
     this.studentApi.getStudents().subscribe(
       (res)=>{
         this.students=res
         console.log("Data....", res);         
       }
     );
    
  }
}
