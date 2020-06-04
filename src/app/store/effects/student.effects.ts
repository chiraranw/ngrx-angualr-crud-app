import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { StudentService } from 'src/app/services/student.service';
import * as fromStudents from '../actions/student.actions'

@Injectable()
export class StudentEffects {

    constructor(
        private actions$: Actions,
        private studentService: StudentService
      ) {}
 
  @Effect()
  loadStudents$ = this.actions$
    .pipe(
      ofType("[Home page] Load"),
      mergeMap(() => this.studentService.getStudents()
        .pipe(
          map(students => ({type:"[Home page] Loading",payload:students})),
          catchError(error=>of({type:"[Home page] Loading Failed",payload:error}))
        ))
      );
 
  
}