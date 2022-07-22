import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProfileRecordComponent } from './add-profile-record/add-profile-record.component';
import { EditProfileRecordComponent } from './edit-profile-record/edit-profile-record.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProfileRecordComponent,
    EditProfileRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
