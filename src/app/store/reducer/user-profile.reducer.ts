import { USER_ADD, USER_DELETE, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_UPDATE } from '../action/user-profile.action';
import { StoreUtility } from '../utils/utility';
import { createSelector } from '@ngrx/store';
import { Action } from '../action';
import { UserProfileModel } from 'src/app/models/user-profile-model';

export interface UserReducerState {
    loading: boolean;
    loaded: boolean;
    entities: { [id: number]: UserProfileModel };
    ids: number[];
}

const initialState: UserReducerState = {
    loaded: false,
    loading: false,
    entities: {},
    ids: []
};

export function UserReducer(state = initialState, action: Action): UserReducerState {
    switch (action.type) {
        case USER_LIST_REQUEST: {
            return { ...state, loading: true };
        }
        case USER_DELETE: {
            const id = action.payload.id;
            const newIds = state.ids.filter(elem => elem !== id);
            const newEntities = StoreUtility.removeKey(state.entities, id);
            return { ...state, ...{ entities: newEntities, ids: newIds } };
        }
        case USER_UPDATE: {
            const user = action.payload.data;
            const entity = { [user.id]: user };
            const updatedEntities = { ...state.entities, ...entity };
            return { ...state, ...{ entities: updatedEntities } };
        }
        case USER_ADD: {
            const user = action.payload.data;
            const entity = { [user.id]: user };
            const newEntities = { ...state.entities, ...entity };
            const newIds = StoreUtility.filterDuplicateIds([...state.ids, user.id]);
            return { ...state, ...{ entities: newEntities, ids: newIds } };

        }
        case USER_LIST_SUCCESS: {
            const users = action.payload.data;
            const obj = StoreUtility.normalize(users);
            const newEntities = { ...state.entities, ...obj };
            const ids = users.map((user: { id: any; }) => user.id);
            const newIds = StoreUtility.filterDuplicateIds([...state.ids, ...ids]);
            return {
                ...state, ...{
                    loaded: true,
                    loading: false, error: false,
                    entities: newEntities, ids: newIds
                }
            };
        }
        default: {
            return state;
        }
    }
}

// selectors
export const getLoading = (state: UserReducerState) => state.loading;
export const getLoaded = (state: UserReducerState) => state.loaded;
export const getEntities = (state: UserReducerState) => state.entities;
export const getIds = (state: UserReducerState) => state.ids;
export const getUsers = createSelector(getEntities,
    (entities) => StoreUtility.unNormalized(entities));

