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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ students: StudentReducer }),
    EffectsModule.forRoot([StudentEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
     // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
