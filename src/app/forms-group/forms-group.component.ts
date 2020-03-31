import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-forms-group',
  templateUrl: './forms-group.component.html',
  styleUrls: ['./forms-group.component.css']
})
export class FormsGroupComponent {
  @Output() sendEventToAddForm = new EventEmitter();
  formValues: Array<object> = [];
  constructor() { }
  getFormValues($event) {
    this.formValues = $event;
  }
  addFormGroup() {
    this.sendEventToAddForm.emit('privet');
  }
}
