import { OauthActions } from '../action-types/oauth-action-types';
import { OauthState } from '../states/oauth-state';

export function login(oauthState: OauthState) {
    return {
        type: OauthActions.USER_LOGIN,
        payload: oauthState
    }
}

// export const hasAuthorized = (oauthState: OauthState) => ({
//     type: OauthActions.HAS_AUTHORIZED,
//     payload: oauthState
// });