import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor(
    private router: Router,
    private mainService: MainService
  ){}
  fillForm: FormGroup = new FormGroup({
    experperience: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      this.mainService.georgianLetters
    ]),
    employer: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      this.mainService.georgianLetters
    ]),
    about: new FormControl(null),
    startDate: new FormControl (null, [Validators.required]),
    endDate: new FormControl(null,{
      validators: [Validators.required]
    }
    )
  });
  get getExperience(){
    return this.fillForm.get('experience')
  }
  get getEmployer(){
    return this.fillForm.get('employer')
  }
}
