import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { rootReducer } from './store/reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProfileRecordComponent } from './add-profile-record/add-profile-record.component';
import { DetailProfileRecordComponent } from './detail-profile-record/detail-profile-record.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProfileRecordComponent,
    DetailProfileRecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
