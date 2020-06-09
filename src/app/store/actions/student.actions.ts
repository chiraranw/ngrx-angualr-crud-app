import { Action } from '@ngrx/store';
import { Student } from 'src/app/model/student.model';


//Types of Action/Events to be fired/invoked
export enum StudentActionTypes {
    LoadStudentsBegin = "[Home page] Load",
    LoadStudentsSuccess = "[Home page] Loading",
    LoadStudentsFailed = "[Home page] Loading Failed"
}

//Implementation of the above Actions
export class LoadStudentsBeginAction implements Action {
    readonly type= StudentActionTypes.LoadStudentsBegin;
    constructor() { }
}

export class LoadStudentsSuccessAction implements Action {
    readonly type= StudentActionTypes.LoadStudentsSuccess;
    constructor(public payload: any) { }
}

export class LoadStudentsFailedAction implements Action {
    readonly type= StudentActionTypes.LoadStudentsFailed;
    constructor(public payload: any) { }
}

export type LoadStudentActionUnion = LoadStudentsBeginAction | LoadStudentsSuccessAction | LoadStudentsFailedAction;