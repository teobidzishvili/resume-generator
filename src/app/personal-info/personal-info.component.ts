import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
 
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})

export class PersonalInfoComponent implements OnInit {
  fillForm!: FormGroup;
  constructor( ){}
  ngOnInit() {
    this.fillForm = new FormGroup({
      'name': new FormControl(null, [
        Validators.required, 
        Validators.minLength(2),
        this.georgianLetters
      ]),
      'surname': new FormControl(null, [
        Validators.required, 
        Validators.minLength(2),
        this.georgianLetters
      ]),
      'photo': new FormControl(null, Validators.required),
      'about': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(null, {
        validators: [Validators.required, this.georgianPhoneNumberValidator()]
      }
        
      )
    });
        
    }
  
  onSubmit(){
     console.log(this.fillForm);
  }
  
  georgianLetters(control: FormControl): { [key: string]: any } | null {
    const georgianPattern = /^[\u10A0-\u10FF\s]+$/; // Regular expression for Georgian letters
  
    if (control.value && (!georgianPattern.test(control.value) || control.value < 2 )) {
      return { georgianLetters: true }; // Return error if the value contains non-Georgian characters
    }
  
    return null; // Return null if the value is valid
  }
  georgianPhoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const valid = /^\+995\d{9}$/.test(control.value);
      return valid ? null : { georgianPhoneNumber: { value: control.value } };
    };
  }

}