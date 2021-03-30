import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { UserDetail } from '../models/userDetail';
import { AppState } from '../store/app.reducer';
import { deleteUserDetail, setUserDetail } from '../store/auth/auth.actions';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;
  userDetail$: Observable<UserDetail | undefined> = this.store
    .select((s) => s.appAuth)
    .pipe(map((b) => b.userDetail));

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private store: Store<AppState>
  ) {}

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      `${this.apiControllerUrl}/login`,
      loginModel
    );
  }

  register(
    registerModel: RegisterModel
  ): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      `${this.apiControllerUrl}/register`,
      registerModel
    );
  }

  logout() {
    this.localStorageService.remove('tokenModel');
    this.localStorageService.remove('userMail');
    this.deleteUserDetail();
  }

  isAuthenticated(
    userMail?: string | null,
    requiredRoles?: string[]
  ): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(
      `${this.apiControllerUrl}/isauthenticated`,
      {
        params:
          userMail && requiredRoles
            ? {
                userMail: userMail,
                requiredRoles: requiredRoles.join(','),
              }
            : {},
      }
    );
  }

  setUserDetail(userDetail: UserDetail) {
    this.store.dispatch(setUserDetail({ userDetail: userDetail }));
  }

  deleteUserDetail() {
    this.store.dispatch(deleteUserDetail());
  }
}
