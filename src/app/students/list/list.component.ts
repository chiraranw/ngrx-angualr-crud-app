import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StudentAppState, getStudents } from 'src/app/store/reducers/student.reducer';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student.model';
import { LoadStudentsBeginAction, DeleteStudentBeginAction, SelectStudentAction } from 'src/app/store/actions/student.actions';
import { StudentService } from 'src/app/services/student.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students$:Observable<Student[]>
  constructor(private store:Store<StudentAppState>, private api:StudentService) { }
  
  ngOnInit(): void {
    this.store.dispatch(new LoadStudentsBeginAction());
    this.students$=this.store.pipe(select(getStudents));    
  }

  delete(student:Student){   
    this.store.dispatch(new DeleteStudentBeginAction(student.id));    
  }

  edit(student:Student){
    console.log("Got this stduent:",student);
    this.store.dispatch(new SelectStudentAction(student.id));
    
  }

}
