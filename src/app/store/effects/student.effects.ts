import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, flatMap, tap, switchMap } from 'rxjs/operators';
import { StudentService } from 'src/app/services/student.service';
import * as fromStudents from '../actions/student.actions'
import { Student } from 'src/app/model/student.model';

@Injectable()
export class StudentEffects {

  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) { }

  @Effect()
  loadStudents$ = this.actions$
    .pipe(
      ofType(fromStudents.StudentActionTypes.LoadStudentsBegin),
      flatMap(() => this.studentService.getStudents()
        .pipe(
          map(students => (new fromStudents.LoadStudentsSuccessAction(students))),
          catchError(error => of(new fromStudents.LoadStudentsFailedAction(error)))
        ))
    );

  @Effect()
  createStudent$ = this.actions$.pipe(
    ofType<fromStudents.AddStudentBeginAction>(fromStudents.StudentActionTypes.AddStudentBegin),
    mergeMap(action => this.studentService.create(action.payload).pipe(
      map(student => new fromStudents.AddStudentSuccessAction(student)),
      catchError(error => of(new fromStudents.AddStudentFailedAction(error)))
    ))
  );

  @Effect()
  deleteStudent$ = this.actions$.pipe(
    //not providing the <> you won't see the action.payload
    ofType<fromStudents.DeleteStudentBeginAction>(fromStudents.StudentActionTypes.DeleteStudentBegin),
    switchMap(action=>this.studentService.delete(action.payload).pipe(
      map(result=> new fromStudents.DeleteStudentSuccessAction(action.payload))
    ))

  );

}