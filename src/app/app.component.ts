import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { tap } from 'rxjs/operators';
import { Student } from './model/student.model';
import {LoadStudentsBeginAction} from './store/actions/student.actions'
import { Store } from '@ngrx/store'
import { StudentAppState } from './store/reducers/student.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public students: Student[] = []
  constructor(private studentApi: StudentService, private store: Store<StudentAppState>) {
    this.store.dispatch(new LoadStudentsBeginAction());
    this.store.subscribe(state=>(this.students=state.students));   
    
  }
}
