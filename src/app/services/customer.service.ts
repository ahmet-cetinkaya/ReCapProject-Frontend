import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = `${environment.apiUrl}/customers`;

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<CustomerResponseModel> {
    return this.httpClient.get<CustomerResponseModel>(`${this.apiUrl}/getall`);
  }
}
