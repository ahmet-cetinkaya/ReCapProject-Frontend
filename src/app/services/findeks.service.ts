import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Findeks } from '../models/findeks';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class FindeksService {
  apiUrl = `${environment.apiUrl}/findeks`;

  constructor(private httpClient: HttpClient) {}

  getByCustomerId(
    customerId: number
  ): Observable<SingleResponseModel<Findeks>> {
    return this.httpClient.get<SingleResponseModel<Findeks>>(
      `${this.apiUrl}/getbycustomerid`,
      {
        params: {
          customerId: customerId.toString(),
        },
      }
    );
  }
}
