import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-detail-profile-record',
  templateUrl: './detail-profile-record.component.html',
  styleUrls: ['./detail-profile-record.component.scss']
})
export class DetailProfileRecordComponent implements OnInit {
  public userData: any;
  constructor(private route: ActivatedRoute, private profileService: UserProfileService) { }

  ngOnInit(): void {
    this.getUserId();
  }

  private getUserId(): void {
    this.route.params.subscribe((params) => {
      this.getUserData(params['userId']);
    });
  }

  private getUserData(userId: number): void {
    this.profileService.getAllUserData(userId).subscribe(res => {
      this.userData = res;
    })
  }

}
