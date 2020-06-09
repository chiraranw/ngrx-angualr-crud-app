import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { tap } from 'rxjs/operators';
import { Student } from './model/student.model';
import {LoadStudentsBeginAction} from './store/actions/student.actions'
import { Store, select } from '@ngrx/store'
import * as fromStudentsReducer from './store/reducers/student.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public students$:Observable<Student[]>
  constructor(private studentApi: StudentService, private store: Store<fromStudentsReducer.StudentAppState>) {
    this.store.dispatch(new LoadStudentsBeginAction());
    //this.store.subscribe(state=>(this.students=state.students));  
    this.students$=this.store.pipe(select(fromStudentsReducer.getStudents)); 
    
  }
}
