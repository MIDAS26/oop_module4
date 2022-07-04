import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { Lab20Component } from './lab20/lab20.component';
import { Lab20Part1Component } from './lab20/lab20-part1/lab20-part1.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { Lab20Part2Component } from './lab20/lab20-part2/lab20-part2.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Lab21Component } from './lab21/lab21.component';
import { Lab21Part2Component } from './lab21/lab21-part2/lab21-part2.component';
import { Lab21Part3Component } from './lab21/lab21-part3/lab21-part3.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { Lab22Component } from './lab22/lab22.component';
import { Lab22Part1Component } from './lab22/lab22-part1/lab22-part1.component';
import { Lab22Part2Component } from './lab22/lab22-part2/lab22-part2.component';
import { Lab22Part3Component } from './lab22/lab22-part3/lab22-part3.component';
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import { Lab23Component } from './lab23/lab23.component';
import { Lab23Part2Component } from './lab23/lab23-part2/lab23-part2.component';
import { Lab23Part3Component } from './lab23/lab23-part3/lab23-part3.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    Lab20Component,
    Lab20Part1Component,
    Lab20Part2Component,
    Lab21Component,
    Lab21Part2Component,
    Lab21Part3Component,
    Lab22Component,
    Lab22Part1Component,
    Lab22Part2Component,
    Lab22Part3Component,
    Lab23Component,
    Lab23Part2Component,
    Lab23Part3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
