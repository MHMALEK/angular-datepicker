import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxAirDatepickerModule } from 'ngx-air-datepicker';
import { TailwindCustomUIComponent } from './with-custom-ui/tailwind.component';
import { WithOutCustomUIComponent } from './without-custom-ui/without-custom-ui.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgxAirDatepickerModule,
  ],
  declarations: [WithOutCustomUIComponent, TailwindCustomUIComponent],
  exports: [WithOutCustomUIComponent, TailwindCustomUIComponent],
})
export class ReactiveFormsExampleModule {}
