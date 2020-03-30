import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  isDeleteButtonDis: boolean;
  constructor(private fb: FormBuilder) {
    this.isDeleteButtonDis = false;
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: '',
      lastName: '',
      age: null,
      phones: this.fb.array([])
    });
    this.myForm.valueChanges.subscribe((values) => {
      if (values.phones && values.phones.length <= 1) {
        this.isDeleteButtonDis = true;
      } else {
        this.isDeleteButtonDis = false;
      }
      console.log(values);
    });
    this.addPhone();
  }
  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }
  addPhone() {
    const phone = this.fb.group({
      number: [],
    });
    this.phoneForms.push(phone);
  }
  deletePhone(index) {
    this.phoneForms.removeAt(index);
  }
}

