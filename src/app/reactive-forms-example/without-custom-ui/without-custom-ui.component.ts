import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-example-without-custom-ui',
  template: `<form [formGroup]="sampleForm" (ngSubmit)="onSubmit()">
    <div>
      <h2>Simple Date picker with options</h2>
      <label>
        date:
        <ngx-air-datepicker-component
          formControlName="datePickerSample"
          [airDatepickerConfig]="{
            dateFormat: 'MMMM yyyy'
          }"
        ></ngx-air-datepicker-component>
      </label>

      <div>
        Selected date is:
        <p>
          {{ sampleForm.controls['datePickerSample'].value?.formattedDate }}
        </p>
        <p>
          {{ sampleForm.controls['datePickerSample'].value?.date }}
        </p>
      </div>
    </div>

    <div>
      <h2>Simple Multi select Datepicker</h2>
      <label>
        date:
        <ngx-air-datepicker-multi-select-component
          formControlName="datePickerMultiSelectSample"
          [airDatepickerConfig]="{
            dateFormat: 'MMMM yyyy'
          }"
        ></ngx-air-datepicker-multi-select-component>
      </label>

      <div>
        Selected date is:
        <p>
          {{
            sampleForm.controls['datePickerMultiSelectSample'].value
              ?.formattedDate
          }}
        </p>
        <p>
          {{ sampleForm.controls['datePickerMultiSelectSample'].value?.date }}
        </p>
      </div>
    </div>

    <div>
      <h2>Simple Range Datepicker</h2>
      <label>
        date:
        <ngx-air-datepicker-range-component
          formControlName="datePickerRangeSample"
          [airDatepickerConfig]="{
            dateFormat: 'MMMM yyyy'
          }"
        ></ngx-air-datepicker-range-component>
      </label>

      <div>
        Selected date is:
        <p>
          {{
            sampleForm.controls['datePickerRangeSample'].value?.formattedDate
          }}
        </p>
        <p>
          {{ sampleForm.controls['datePickerRangeSample'].value?.date }}
        </p>
      </div>
    </div>
  </form>`,
})
export class WithOutCustomUIComponent {
  sampleForm!: FormGroup;

  ngOnInit() {
    this.sampleForm = new FormGroup({
      datePickerSample: new FormControl(null, Validators.required),
      datePickerMultiSelectSample: new FormControl(null, Validators.required),
      datePickerRangeSample: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.sampleForm);
  }
}
