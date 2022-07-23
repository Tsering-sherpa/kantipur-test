import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileRecordComponent } from './add-profile-record/add-profile-record.component';
import { DetailProfileRecordComponent } from './detail-profile-record/detail-profile-record.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'view-profile/:userId', component: DetailProfileRecordComponent },
  { path: 'add-profile', component: AddProfileRecordComponent },
  { path: 'add-profile/:userId', component: AddProfileRecordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
