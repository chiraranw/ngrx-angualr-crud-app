import { Student } from 'src/app/model/student.model';
import * as fromStduents from '../actions/student.actions'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity'
import { EntityStateAdapter } from '@ngrx/entity/src/models';


export interface StudentAppState extends EntityState<Student> {
    loaded: boolean,
    error: any
}
export const adapter: EntityAdapter<Student> = createEntityAdapter();

export const initialState: StudentAppState = adapter.getInitialState(
    {
        loaded: false,
        error: null
    }
);

export function StudentReducer(state = initialState, action: fromStduents.LoadStudentActionUnion): StudentAppState {
    switch (action.type) {
        //To initiate loading, no payload required
        case fromStduents.StudentActionTypes.LoadStudentsBegin: {
            console.log("LoadStudentsBegin");
            return { ...state, loaded: false, error: null }
        };

        //call http get, success, stick the contents in the state
        case fromStduents.StudentActionTypes.LoadStudentsSuccess: {
            console.log("LoadStudentsSuccess");
            return { ...adapter.addAll(action.payload, state), loaded: true, error: null }
        };

        case fromStduents.StudentActionTypes.AddStudentBegin: {
            return { ...state, loaded: false, error: null }
        };

        case fromStduents.StudentActionTypes.AddStudentSuccess: {
            return { ...adapter.addOne(action.payload, state), loaded: true, error: null }
        };

        case fromStduents.StudentActionTypes.AddStudentFailed: {
            return { ...state, loaded: false, error: action.payload }
        };

        //some error happened, bring it back to the user.
        case fromStduents.StudentActionTypes.LoadStudentsFailed: {
            console.log("LoadStudentsFailed");
            return { ...state, loaded: false, error: action.payload }
        };

        //a mysterious action from Pluto!
        default: {
            console.log("Default");
            return state;
        };
    }
}

//Selectors
const studentFeatureState = createFeatureSelector<StudentAppState>("students");

export const getStudents = createSelector(studentFeatureState, adapter.getSelectors().selectAll);
export const getStudentLoaded = createSelector(studentFeatureState, (state: StudentAppState) => state.loaded);
export const getStudentError = createSelector(studentFeatureState, (state: StudentAppState) => state.error);

