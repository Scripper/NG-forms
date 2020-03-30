import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {FormComponent} from '../form/form.component';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-forms-group',
  templateUrl: './forms-group.component.html',
  styleUrls: ['./forms-group.component.css']
})
export class FormsGroupComponent implements AfterViewInit, OnDestroy {
  @ViewChild(FormComponent) childReference;
  formValues;
  dataToShow: object;
  ngAfterViewInit(): void {
    this.formValues = this.childReference.formValues;
    this.formValues.subscribe( (value) => {
      this.dataToShow = value;
    }); }

  constructor(private fb: FormBuilder) { }
  addNewForm() {
    console.log('ad')
  }
}
