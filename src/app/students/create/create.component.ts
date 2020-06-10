import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/model/student.model';
import { Store } from '@ngrx/store';
import { StudentAppState } from 'src/app/store/reducers/student.reducer';
import { AddStudentBeginAction } from 'src/app/store/actions/student.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  createStForm:FormGroup;

  constructor(private fb:FormBuilder, private api:StudentService, private store:Store<StudentAppState>) { 
    this.createStForm=fb.group({
      name:[],
      surname:[]
    });
  }

  public submit(){
    let temp:Student= {  "id": (Math.floor(Math.random()*100)+22),
    "name": this.createStForm.value.name,"surname": this.createStForm.value.surname};
    console.log("data...",temp);    
    this.store.dispatch(new AddStudentBeginAction(temp));
  }

  ngOnInit(): void {
  
    
  }

}
