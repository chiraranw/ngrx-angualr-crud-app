import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 
  editStForm;

  constructor(fb:FormBuilder) { 
    this.editStForm=fb.group({
      id:[],
      name:[],
      surname:[]
    });
  }

  ngOnInit(): void {
  }

}
