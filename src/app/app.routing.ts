import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { HomeComponent } from './home/index';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/index';
import { OtpComponent } from './register/otp.component';
import { PatientDetailComponent } from './patient_detail/patient-detail.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UserListComponent } from './admin_panel/user-list/user-list.component';
import { UserUpdateComponent } from './admin_panel/user-update/user-update.component';
import { VoteTakerComponent } from './practice/input-and-output/vote-taker/vote-taker.component';
import { VoterComponent } from './practice/input-and-output/voter/voter.component';


const appRoutes: Routes = [
    { path: 'vote-taker' , component: VoteTakerComponent },
    { path: 'home' , component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register' , component: RegisterComponent},
    { path: 'otp' , component: OtpComponent},
    { path: 'patient-detail' , component: PatientDetailComponent , canActivate: [AuthGuard]},
    { path: 'add-patient' , component: AddPatientComponent , canActivate: [AuthGuard]},
    { path: 'users' , component: UserListComponent , canActivate: [AuthGuard]},
    { path: 'update-user/:id' , component: UserUpdateComponent , canActivate: [AuthGuard]}, 
    { path: '', redirectTo: '/home', pathMatch: 'full' , canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes , {enableTracing: true});
// or we can also write the above statement in a little different way .
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
