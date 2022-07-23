import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from '../models/user-profile-model';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public allUserData: UserProfileModel[] = [];
  public deleteData = false;
  public selectedUser: any;

  constructor(private profileService: UserProfileService) { }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {
    this.profileService.getAllUserData().subscribe((res) => {
      this.allUserData = res;
    });
  }

  public getSelectedUser(user: any): void {
    this.deleteData = true;
    this.selectedUser = user;
  }

  public deleteUser(deleteUser = false): void {
    if (!deleteUser) {
      this.deleteData = false;
    }
    else {
      this.profileService.deleteuserData(this.selectedUser.id).subscribe(res => {
        if (res) {
          this.deleteData = false;
          this.initialize();
        }
      })
    }
  }
}
