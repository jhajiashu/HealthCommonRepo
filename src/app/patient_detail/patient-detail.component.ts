import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Element } from '../models/element';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-patient-detail',
    templateUrl: './patient-detail.component.html',
    styleUrls: ['./patient-detail.component.css']
})

export class PatientDetailComponent {

    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource();

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
      }

    constructor(private router: Router, private userService: UserService) {

    }

    public logout(): void {
        this.userService.logout();
    }

}

// const ELEMENT_DATA: Element = [
//     {'fileName': "report1", "createDate": '12-Nov-2017', "updateDate": '12-Nov-2017', "verified": 'Y'},
//     {'fileName': "report2", "createDate": '12-Nov-2017', "updateDate": '12-Nov-2017', "verified": 'N'},
//     {'fileName': "report3", "createDate": '12-Nov-2017', "updateDate": '12-Nov-2017', "verified": 'Y'},
//     {'fileName': "report4", "createDate": '12-Nov-2017', "updateDate": '12-Nov-2017', "verified": 'Y'},
//     {'fileName': "report5", "createDate": '12-Nov-2017', "updateDate": '12-Nov-2017', "verified": 'N'},
//     {'fileName': "report6", "createDate": '12-Nov-2017', "updateDate": '12-Nov-2017', "verified": 'Y'},
//     {"fileName": "report7", "createDate": '12-Nov-2017', "updateDate": '12-Nov-2017', "verified": 'N'}
//   ];
