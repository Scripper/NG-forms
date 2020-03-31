import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  @Output () formValues = new EventEmitter();
  constructor() {
    this.myForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      number: new FormControl()
    });
  }
  ngOnInit(): void {
    this.formValues.emit(this.myForm);
    this.myForm.valueChanges.subscribe(() => {
      this.formValues.emit(this.myForm);
    });
  }
}

