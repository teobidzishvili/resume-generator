import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})

export class PersonalInfoComponent {
  constructor(
    private router: Router,
    private mainService: MainService
  ){}
  ngOnInit() {
  }
  fillForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required, 
      Validators.minLength(2),
      this.mainService.georgianLetters
    ]),
    surname: new FormControl(null, [
      Validators.required, 
      Validators.minLength(2),
      this.mainService.georgianLetters
    ]),
    photo: new FormControl(null, Validators.required),
    about: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(null, {
      validators: [Validators.required, this.mainService.georgianPhoneNumberValidator()]
    }
    )
  });
  get getName(){
    return this.fillForm.get('name')
  }
  get getSurname(){
    return this.fillForm.get('surname')
  }
  get getPhoto(){
    return this.fillForm.get('photo')
  }
  get getEmail(){
    return this.fillForm.get('email')
  }
  get getPhoneNumber(){
    return this.fillForm.get('phonemNumber')
  }
  onSubmit(){
    this.fillForm.markAllAsTouched()
    if(this.fillForm.invalid)return;
    this.router.navigate(['/experience'])
    console.log(this.fillForm.value);
  }

}
  


    


