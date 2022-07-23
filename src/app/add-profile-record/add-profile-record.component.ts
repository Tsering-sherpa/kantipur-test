import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserAddAction, UserUpdateAction } from '../store/action/user-profile.action';
import { RootReducerState } from '../store/reducer';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-add-profile-record',
  templateUrl: './add-profile-record.component.html',
  styleUrls: ['./add-profile-record.component.scss'],
})
export class AddProfileRecordComponent implements OnInit {
  public addUserForm: FormGroup;
  public isSubmitted = false;
  private isUpdateData = false;
  private userId: number = 0;

  constructor(
    private fb: FormBuilder,
    private profileService: UserProfileService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<RootReducerState>
  ) {
    this.addUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      profile: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getUserId();
    if (this.userId) {
      this.isUpdateData = true;
      this.updateData(this.userId);
    }
  }

  private getUserId(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['userId'];
    });
  }

  public updateData(userId: number): void {
    this.profileService.getAllUserData(userId).subscribe(res => {
      this.addUserForm.patchValue(res);
    })
  }

  public saveUser(): void {
    this.isSubmitted = true;
    if (this.addUserForm.invalid) return;

    if (this.isUpdateData) {
      this.profileService.updateUserData(this.addUserForm.value, this.userId).subscribe((res) => {
        if (res) {
          this.store.dispatch(new UserUpdateAction({ data: res }));
          this.router.navigateByUrl('/home');
        }
      });
    }
    else {
      this.profileService.addUserData(this.addUserForm.value).subscribe((res) => {
        if (res) {
          this.store.dispatch(new UserAddAction({ data: res }));
          this.router.navigateByUrl('/home');
        }
      });
    }
  }

  public checkValidation(controlName: string) {
    if (
      (this.addUserForm.controls[controlName].touched &&
        this.addUserForm.controls[controlName].invalid) ||
      (this.addUserForm.controls[controlName].invalid && this.isSubmitted)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
