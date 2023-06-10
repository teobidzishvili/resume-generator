import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { RouterModule, Routes } from '@angular/router'; 


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
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
