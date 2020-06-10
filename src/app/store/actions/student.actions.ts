import { Action } from '@ngrx/store';
import { Student } from 'src/app/model/student.model';


//Types of Action/Events to be fired/invoked
export enum StudentActionTypes {
    //Loading Action
    LoadStudentsBegin = "[Home page] Load",
    LoadStudentsSuccess = "[Home page] Loading",
    LoadStudentsFailed = "[Home page] Loading Failed",

    //Add Student Action
    AddStudentBegin = "[Create Component] Adding",
    AddStudentSuccess = "[Create Component] Add",
    AddStudentFailed = "[Create Component] Adding Failed"
}

//Implementation of the above Actions
export class AddStudentBeginAction implements Action {
    readonly type = StudentActionTypes.AddStudentBegin;
    constructor(public payload: Student) { }
}

export class AddStudentSuccessAction implements Action {
    readonly type = StudentActionTypes.AddStudentSuccess;
    constructor(public payload: Student) { }
}

export class AddStudentFailedAction implements Action {
    readonly type = StudentActionTypes.AddStudentFailed;
    constructor(public payload: any) { }
}



export class LoadStudentsBeginAction implements Action {
    readonly type = StudentActionTypes.LoadStudentsBegin;
    constructor() { }
}

export class LoadStudentsSuccessAction implements Action {
    readonly type = StudentActionTypes.LoadStudentsSuccess;
    constructor(public payload: any) { }
}

export class LoadStudentsFailedAction implements Action {
    readonly type = StudentActionTypes.LoadStudentsFailed;
    constructor(public payload: any) { }
}

export type LoadStudentActionUnion =
    LoadStudentsBeginAction
    | LoadStudentsSuccessAction
    | LoadStudentsFailedAction
    | AddStudentBeginAction
    | AddStudentSuccessAction
    | AddStudentFailedAction;