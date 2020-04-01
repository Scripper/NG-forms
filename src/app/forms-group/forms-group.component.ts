import {Component, OnDestroy, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-forms-group',
  templateUrl: './forms-group.component.html',
  styleUrls: ['./forms-group.component.css']
})
export class FormsGroupComponent implements  OnInit, OnDestroy {
  myForm: FormGroup;
  formSubscribe: Subscription;
  constructor(private fb: FormBuilder) { }

  ngOnDestroy(): void {
    this.formSubscribe.unsubscribe();
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      users: this.fb.array([])
    });
    this.formSubscribe = this.myForm.valueChanges.subscribe(() => {
    });
  }

  get formGroup() {
    return this.myForm.get('users') as FormArray;
  }

  addFormGroup() {
    this.formGroup.push(new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      number: new FormControl()
    }));
  }

  deleteFormGroup(index) {
    this.formGroup.removeAt(index);
  }
}
