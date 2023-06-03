import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-example-taildwind-ui',
  templateUrl: './tailwind.component.html',
})
export class TailwindCustomUIComponent {
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
