import { Action } from '@ngrx/store';
import { UserProfileModel } from 'src/app/models/user-profile-model';
export enum ProfileActionType {
    ADD_ITEM = '[PROFILE] Add profile',
}
export class AddItemAction implements Action {
    readonly type = ProfileActionType.ADD_ITEM;
    //optional payload
    constructor(public payload: UserProfileModel) { }
}
export type ProfileAction = AddItemAction;