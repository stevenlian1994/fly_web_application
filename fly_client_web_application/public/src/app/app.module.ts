import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormImageSubmissionComponent } from './form-image-submission/form-image-submission.component';
import { FormVideoSubmissionComponent } from './form-video-submission/form-video-submission.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormImageSubmissionComponent,
    FormVideoSubmissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
