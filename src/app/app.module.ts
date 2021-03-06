import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
