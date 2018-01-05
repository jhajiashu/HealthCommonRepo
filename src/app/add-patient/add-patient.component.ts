import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { OriginConnectionPosition } from '@angular/cdk/overlay';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
import { PatientService } from '../_services/patient.service';

@Component({
    selector: 'app-add-patient',
    templateUrl: './add-patient.component.html',
    styleUrls: ['./add-patient.component.css']
})

export class AddPatientComponent implements OnInit {
    patient: Patient;

    constructor(private patientService: PatientService) {

    }

    ngOnInit(): void {
        this.patient = {
            patient_id: '',
            user_id: '',
            full_name: '',
            age: null,
            gender: null,
            weight: null,
            height: null,
            critical_disease: null,
            tags: ''
        };
    }

    public addPatient(): void {
      this.patient.user_id = '2c0517b9-150e-44a6-8990-42fec0826c4f';
      this.patientService.addPatient(this.patient);
    }

    public logout(): void {
        // this.authenticationService.logout();
    }
}
