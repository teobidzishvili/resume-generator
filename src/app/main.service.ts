import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
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
