import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StudentAppState, getStudents } from 'src/app/store/reducers/student.reducer';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student.model';
import { LoadStudentsBeginAction } from 'src/app/store/actions/student.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students$:Observable<Student[]>
  constructor(private store:Store<StudentAppState>) { }
  
  ngOnInit(): void {
    this.store.dispatch(new LoadStudentsBeginAction());
    this.students$=this.store.pipe(select(getStudents));
  }

}
