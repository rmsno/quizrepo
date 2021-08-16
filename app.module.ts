import { NgModule } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { ConfirmComponent } from './confirm/confirm.component';
@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    routingComponents,
  AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
