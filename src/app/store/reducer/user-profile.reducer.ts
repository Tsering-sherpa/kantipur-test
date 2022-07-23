
// //create a dummy initial state

import { UserProfileModel } from "src/app/models/user-profile-model";
import { ProfileAction, ProfileActionType } from "../action/user-profile.action";


const initialState: UserProfileModel[] = []

export function ProfileReducer(
    state = initialState,
    action: ProfileAction
) {
    switch (action.type) {
        case ProfileActionType.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}