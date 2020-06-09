import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { StudentEffects } from './store/effects/student.effects'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { StudentService } from './services/student.service';
import { StudentReducer } from './store/reducers/student.reducer';
import { ListComponent } from './students/list/list.component';
import { EditComponent } from './students/edit/edit.component';
import { CreateComponent } from './students/create/create.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ students: StudentReducer }),
    EffectsModule.forRoot([StudentEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
