import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';

@Injectable()
export class StepperIntl extends MatStepperIntl {
  // the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}


@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css'],
  providers: [{ provide: MatStepperIntl, useClass: StepperIntl }],
})
export class ECommerceComponent {
 
  optionalLabelText: string ="";
  longText=`prix courant: 23,98 $US
  prix hors promotion: 169,98 $US 
  discount : 86 % 
  discount valable to 28/08/2022  ` ;
  optionalLabelTextChoices: string[] = ['Visa *****52036', 'Carte crédit/débit', 'Paypal'];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCltr: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl) { }

  updateOptionalLabel() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    // Required for the optional label text to be updated
    // Notifies the MatStepperIntl service that a change has been made
    this._matStepperIntl.changes.next();
  }

}
