import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = `${environment.apiUrl}/brands`;

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(`${this.apiUrl}/getall`);
  }
}
