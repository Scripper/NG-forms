import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-forms-group',
  templateUrl: './forms-group.component.html',
  styleUrls: ['./forms-group.component.css']
})
export class FormsGroupComponent implements  OnInit, OnDestroy {
  @Output() sendEventToAddForm = new EventEmitter();
  myForm: FormGroup;
  formSubscribe: Subscription;
  formValues;
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
  formGroupController($event, idx) {
    this.formValues = $event;
    // this.formGroup.setControl(idx, $event);
  }
  get formGroup() {
    return this.myForm.get('users') as FormArray;
  }

  addFormGroup() {
    const user = this.fb.group([]);
    this.formGroup.push(user);
  }

  deleteFormGroup(index) {
    this.formGroup.removeAt(index);
  }
}
// функция для возврата инишиал состояния с айди встроить в кнопку addformgroup, потом по айди искать и исправлять
// при клике - получение данных, потом ????

// в myForm нету данных с форм, т.к 37 строка.
