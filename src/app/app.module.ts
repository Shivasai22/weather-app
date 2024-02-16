import { HttpClientModule } from '@angular/common/http';
import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { WeatherComponent  } from './weather/weather.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [AppComponent,WeatherComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    WeatherComponent,
    MatFormFieldModule
    
  ],

  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
