import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  createStForm;

  constructor(fb:FormBuilder) { 
    this.createStForm=fb.group({
      name:[],
      surname:[]
    });
  }

  ngOnInit(): void {
  }

}
