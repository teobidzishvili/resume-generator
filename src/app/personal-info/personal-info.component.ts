import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

 
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  fillForm!: FormGroup;

  constructor( ){}
  ngOnInit(): void {
    this.fillForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required), 
      'photo': new FormControl(null, Validators.required),
      'about': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
     console.log(this.fillForm);
  }
}
