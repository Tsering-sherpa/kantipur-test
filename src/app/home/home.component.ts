import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public allUserData: any[] = [];

  constructor(private profileService: UserProfileService) {}

  ngOnInit(): void {
    this.profileService.getAllUserData().subscribe((res) => {
      this.allUserData = res;
    });
  }

  public deleteUser(user: any): void {}

  public addNewUser(): void {}
}
