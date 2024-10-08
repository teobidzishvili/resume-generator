import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { RouterModule, Routes } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MainService } from './main.service';
import { DatePickerComponent } from './date-picker/date-picker.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalInfoComponent,
    ExperienceComponent,
    EducationComponent,
    DatePickerComponent
  ],
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
