import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {subscriptionLogsToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Subscribable, Subscriber, Subscription} from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  isDeleteButtonDisabled: boolean;
  formSubscribe: Subscription;
  @Output() formValues = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.isDeleteButtonDisabled = false;
    this.formValues.emit(this.myForm);
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: '',
      lastName: '',
      age: null,
      phones: this.fb.array([])
    });
    this.formSubscribe = this.myForm.valueChanges.subscribe((values) => {
      this.formValues.emit(values);
      if (values.phones && values.phones.length <= 1) {
        this.isDeleteButtonDisabled = true;
        return;
      }
      this.isDeleteButtonDisabled = false;
    });
    this.addPhone();
  }
  ngOnDestroy(): void {
    this.formSubscribe.unsubscribe();
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

