import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  controllerUrl = `${environment.apiUrl}/payment`;

  constructor(private httpClient: HttpClient) {}

  // Test
  payment(): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(`${this.controllerUrl}/payment`);
  }
}
