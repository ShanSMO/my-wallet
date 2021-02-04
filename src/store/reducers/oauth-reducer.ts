import { Action } from "redux";
import { OauthActions } from "../action-types/oauth-action-types";
import {OauthState} from '../states/oauth-state';

export default function OauthReducer(initialState: OauthState, action: Action) {
    switch(action.type) {
       case OauthActions.USER_LOGIN : return {...initialState}; 
       case OauthActions.HAS_AUTHORIZED : return {
           hasAuthorized: true
       }; 
       default: return {id: 1, hasAuthenticated: false};
    }
}