import { createAction, props } from '@ngrx/store';
import { UserDetail } from '../../models/userDetail';

export const setUserDetail = createAction(
  'Set UserDetail',
  props<{ userDetail: UserDetail }>()
);

export const deleteUserDetail = createAction('Delete User Detail');
