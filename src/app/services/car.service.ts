import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = `${environment.apiUrl}/cars`;

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(`${this.apiUrl}/getall`);
  }

  getCarDetails(): Observable<CarDetailResponseModel> {
    return this.httpClient.get<CarDetailResponseModel>(
      `${this.apiUrl}/getcardetails`
    );
  }

  getCarsByBrandId(id: number): Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(
      `${this.apiUrl}/getcarsbybrandid?id=${id}`
    );
  }
}
