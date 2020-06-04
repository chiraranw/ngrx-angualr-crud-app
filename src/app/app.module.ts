import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { StudentEffects } from './store/effects/student.effects'
import { EffectsModule } from '@ngrx/effects'

import { AppComponent } from './app.component';
import { StudentService } from './services/student.service';
import { StudentReducer } from './store/reducers/student.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ students: StudentReducer }),
    EffectsModule.forRoot([StudentEffects])
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
