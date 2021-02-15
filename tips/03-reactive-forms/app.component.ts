import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {

  form: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.newForm();
  }

  newForm(): void {
    this.form = this.fb.group({
      SINGLE   : [''],
      GROUP    : this.fb.group({
        G1       : [''],
        G2       : ['']
      }),
    });
  }

  saveForm(): void {
    console.log(this.form.value);
  }

}
