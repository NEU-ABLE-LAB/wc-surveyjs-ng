import { NgModule } from '@angular/core';
import { SurveyComponent } from './components.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SurveyComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    SurveyComponent
  ]
})
export class ComponentsModule { }
