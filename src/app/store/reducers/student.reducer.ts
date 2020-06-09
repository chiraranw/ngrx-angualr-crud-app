import { Student } from 'src/app/model/student.model';
import * as fromStduents from '../actions/student.actions'
import { createFeatureSelector, createSelector } from '@ngrx/store'


export interface StudentAppState {
    loaded: boolean,
    students: Student[],
    error: any
}

export const initialState: StudentAppState = {
    loaded: true,
    students: [],
    error: null
}

export function StudentReducer(state = initialState, action: fromStduents.LoadStudentActionUnion): StudentAppState {
    switch (action.type) {

        //To initiate loading, no payload required
        case fromStduents.StudentActionTypes.LoadStudentsBegin: {
            console.log("LoadStudentsBegin");
            return {
                ...state,
                loaded: false,
                students: [],
                error: null
            }
        };

        //call http get, success, stick the contents in the state
        case fromStduents.StudentActionTypes.LoadStudentsSuccess: {
            console.log("LoadStudentsSuccess");
            return {
                ...state,
                loaded: true,
                students: action.payload,
                error: null
            }
        };

        //some error happened, bring it back to the user.
        case fromStduents.StudentActionTypes.LoadStudentsFailed: {
            console.log("LoadStudentsFailed");
            return {
                ...state,
                loaded: false,
                students: [],
                error: action.payload
            }
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

export const getStudents = createSelector(studentFeatureState,(state: StudentAppState) => state.students);
export const getStudentLoaded = createSelector(studentFeatureState,(state: StudentAppState) => state.loaded);
export const getStudentError = createSelector(studentFeatureState,(state: StudentAppState) => state.error);