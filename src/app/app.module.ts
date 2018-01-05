import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routing} from './app.routing';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { OtpComponent } from './register/otp.component';
import { PatientDetailComponent } from './patient_detail/patient-detail.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UserListComponent } from './admin_panel/user-list/user-list.component';
import { UserUpdateComponent } from './admin_panel/user-update/user-update.component';
import { VoterComponent } from './practice/input-and-output/voter/voter.component';

// Services
import { UserService } from './_services/user.service';
import { PatientService } from './_services/patient.service';

// Guards
import { AuthGuard } from './_guards/index';
import { VoteTakerComponent } from './practice/input-and-output/vote-taker/vote-taker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    OtpComponent,
    PatientDetailComponent,
    AddPatientComponent,
    UserListComponent,
    UserUpdateComponent,
    VoterComponent,
    VoteTakerComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [AuthGuard , UserService , PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
