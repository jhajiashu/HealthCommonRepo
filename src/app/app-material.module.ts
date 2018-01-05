import { BrowserModule }   from '@angular/platform-browser';
import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatGridListModule,
    MatTabsModule,
    MatTable,
    MatTableModule,
    MatListModule

  } from '@angular/material';

  import { NgModule }     from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatProgressBarModule,
        MatInputModule,
        MatGridListModule,
        MatTabsModule,
        MatTableModule,
        MatListModule


      ],
      exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatProgressBarModule,
        MatInputModule,
        MatGridListModule,
        MatTabsModule,
        MatTableModule,
        MatListModule
      ]
})
export class AppMaterialModule {

}
