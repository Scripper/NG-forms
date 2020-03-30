import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {FormComponent} from '../form/form.component';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-forms-group',
  templateUrl: './forms-group.component.html',
  styleUrls: ['./forms-group.component.css']
})
export class FormsGroupComponent {

  constructor(private fb: FormBuilder) { }

}
