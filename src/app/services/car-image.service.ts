import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImageResponseModel } from '../models/carImageResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = `${environment.apiUrl}/carImages`;

  constructor(private httpClient: HttpClient) {}

  getImagesByCarId(id: number): Observable<CarImageResponseModel> {
    return this.httpClient.get<CarImageResponseModel>(
      `${this.apiUrl}/getimagesbycarid?id=${id}`
    );
  }

  getFileById(id: number): Observable<string> {
    return this.httpClient.get<string>(`${this.apiUrl}/getfilebyid?id=${id}`);
  }

  getCarImageUrl(id: number): string {
    return `${this.apiUrl}/getfilebyid?id=${id}`;
  }
}
