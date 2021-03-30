import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserDetail } from '../models/userDetail';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiControllerUrl = `${environment.apiUrl}/users`;

  constructor(private httpClient: HttpClient) {}

  getUserDetailByEmail(
    userMail: string
  ): Observable<SingleResponseModel<UserDetail>> {
    return this.httpClient.get<SingleResponseModel<UserDetail>>(
      `${this.apiControllerUrl}/getuserdetailbymail`,
      {
        params: {
          userMail: userMail,
        },
      }
    );
  }
}
