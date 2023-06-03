import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAirDatepickerModule } from 'ngx-air-datepicker';

import { AppComponent } from './app.component';
import { ReactiveFormsExampleModule } from './reactive-forms-example/reactive-forms-example.module';
import { TemplateDrivenFormsExampleModule } from './template-driven-forms/template-driven-forms.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxAirDatepickerModule,
    TemplateDrivenFormsExampleModule,
    ReactiveFormsExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NgxAirDatepickerModule],
})
export class AppModule {}
