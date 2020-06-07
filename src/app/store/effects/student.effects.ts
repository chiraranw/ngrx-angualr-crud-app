import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, flatMap } from 'rxjs/operators';
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
      ofType(fromStudents.StudentActionTypes.LoadStudentsBegin),
      flatMap(() => this.studentService.getStudents()
        .pipe(
          map(students => (new fromStudents.LoadStudentsSuccessAction(students))),
          catchError(error=>of(new fromStudents.LoadStudentsFailedAction(error)))
        ))
      );
 
  
}