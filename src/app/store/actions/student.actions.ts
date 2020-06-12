import { Action } from '@ngrx/store';
import { Student } from 'src/app/model/student.model';
import { Update } from '@ngrx/entity';


//Types of Action/Events to be fired/invoked
export enum StudentActionTypes {
    //Loading Action
    LoadStudentsBegin = "[Home page] Load",
    LoadStudentsSuccess = "[Home page] Loading",
    LoadStudentsFailed = "[Home page] Loading Failed",

    //Add Student Action
    AddStudentBegin = "[Create Component] Adding",
    AddStudentSuccess = "[Create Component] Add",
    AddStudentFailed = "[Create Component] Adding Failed",

    //Delete Student Action
    //Action String MUST NEVER be equal
    DeleteStudentBegin = "[Home Service] Deleting",
    DeleteStudentSuccess = "[Home Service] Deleted",
    DeleteStudentFailed = "[Home Service] Delete Failed",

    //Update Student
    UpdateStudent = "[Home Service] Update",
    UpdateStudentSuccess = "[Home Service] Updated",
    UpdateStudentFailed = "[Home Service] Update failed",

    //SELECT FOR EDIT
    SelectStudent = "[Home Service] Select",
    SelectStudentSuccess = "[Home Service] Selected",
    SelectStudentFailed = "[Home Service] Select Failed",
}

//Implementation of the above Actions

//Select
export class SelectStudentAction implements Action {
    readonly type = StudentActionTypes.SelectStudent;
    constructor(public payload: number) { }
}

export class SelectStudentSuccessAction implements Action {
    readonly type = StudentActionTypes.SelectStudentSuccess;
    constructor(public payload: Student) { }
}

export class SelectStudentFailedAction implements Action {
    readonly type = StudentActionTypes.SelectStudentFailed;
    constructor(public payload: any) { }
}
//UPDATE
export class UpdateStudentAction implements Action {
    readonly type = StudentActionTypes.UpdateStudent;
    constructor(public payload: Student) { }
}
export class UpdateStudentSuccess implements Action {
    readonly type = StudentActionTypes.UpdateStudentSuccess;
    constructor(public payload: Update<Student>) { }
}

export class UpdateStudentFailed implements Action {
    readonly type = StudentActionTypes.UpdateStudentFailed;
    constructor(public payload: any) { }
}

//DELETE
export class DeleteStudentBeginAction implements Action {
    readonly type = StudentActionTypes.DeleteStudentBegin;
    constructor(public payload: number) { }
}

export class DeleteStudentSuccessAction implements Action {
    readonly type = StudentActionTypes.DeleteStudentSuccess;
    constructor(public payload: number) { }
}

export class DeleteStudentFailedAction implements Action {
    readonly type = StudentActionTypes.DeleteStudentFailed;
    constructor(public payload: any) { }
}

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
    | AddStudentFailedAction
    | DeleteStudentBeginAction
    | DeleteStudentSuccessAction
    | DeleteStudentFailedAction
    | UpdateStudentAction
    | UpdateStudentSuccess
    | UpdateStudentFailed
    | SelectStudentAction
    | SelectStudentSuccessAction
    | SelectStudentFailedAction;