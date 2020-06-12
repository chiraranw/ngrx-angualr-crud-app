import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/model/student.model';
import { Store } from '@ngrx/store';
import { StudentAppState, getSelectedStudent } from 'src/app/store/reducers/student.reducer';
import { UpdateStudentAction } from 'src/app/store/actions/student.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  editStForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<StudentAppState>) {
    this.editStForm = fb.group({
      id: [],
      name: [],
      surname: []
    });
  }


  update() {
    let temp: Student = {
      "id": this.editStForm.value.id,
      "name": this.editStForm.value.name,
      "surname": this.editStForm.value.surname
    };
    this.store.dispatch(new UpdateStudentAction(temp));
  }

 ngOnInit(): void {
  const student$:Observable<Student>=this.store.select(getSelectedStudent);
  student$.subscribe(currentStudent => {
    if (currentStudent) {
      this.editStForm.patchValue({
        name: currentStudent.name,
        surname:currentStudent.surname,
        id: currentStudent.id
      });
    }
  })


  }

}
