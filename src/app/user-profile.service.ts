import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserProfileModel } from './models/user-profile-model';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private profileUrl =
    'https://62daf413d1d97b9e0c499810.mockapi.io/kantipur_test/v1/user/';

  constructor(private httpClient: HttpClient) { }

  public addUserData(params: UserProfileModel): Observable<UserProfileModel> {
    return this.httpClient.post(this.profileUrl, params);
  }

  public updateUserData(params: UserProfileModel, userId: number): Observable<UserProfileModel> {
    return this.httpClient.put(this.profileUrl + userId, params);
  }

  public deleteuserData(userId: number): Observable<UserProfileModel> {
    return this.httpClient.delete(this.profileUrl + userId);
  }

  public viewUserData(userId: number): Observable<UserProfileModel> {
    return this.httpClient.get(this.profileUrl + userId);
  }

  public getAllUserData(userId?: number): Observable<any> {
    return this.httpClient.get(this.profileUrl + (userId ? userId : ''));
  }
}
