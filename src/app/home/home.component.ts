import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserProfileModel } from '../models/user-profile-model';
import { UserDeleteAction, UserListRequestAction, UserListSuccessAction } from '../store/action/user-profile.action';
import { getUserLoading, getUserLoaded, getUsers, RootReducerState } from '../store/reducer/index';
import { UserProfileService } from '../user-profile.service';
import { combineLatest, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public allUserData: UserProfileModel[] = [];
  public deleteData = false;
  public selectedUser: any;

  constructor(private profileService: UserProfileService, private store: Store<RootReducerState>) { }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {
    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    const getUserData = this.store.select(getUsers);
    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
      if (!data[0] && !data[1]) {
        this.store.dispatch(new UserListRequestAction());
        this.profileService.getAllUserData().subscribe((res) => {
          this.store.dispatch(new UserListSuccessAction({ data: res }));
        });
      }
    });
    getUserData.subscribe((data) => {
      this.allUserData = data;
    })
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
          this.store.dispatch(new UserDeleteAction({ id: this.selectedUser.id }));
          this.initialize();
        }
      })
    }
  }
}
