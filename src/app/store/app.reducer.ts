import { AuthReducer, AuthState } from './auth/auth.reducer';

export interface AppState {
  appAuth: AuthState;
}

export const AppReducers = {
  appAuth: AuthReducer,
};
