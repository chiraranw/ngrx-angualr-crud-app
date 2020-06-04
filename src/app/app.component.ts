import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { tap } from 'rxjs/operators';
import { Student } from './model/student.model';
import {LoadStudentsBeginAction} from './store/actions/student.actions'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-ngrx-app';
  public students: Student[] = []
  constructor(private studentApi: StudentService, private store: Store) {
    this.store.dispatch({type:"[Home page] Load"});
    //this.store.dispatch(new LoadStudentsBeginAction());
    
    
  }
}
