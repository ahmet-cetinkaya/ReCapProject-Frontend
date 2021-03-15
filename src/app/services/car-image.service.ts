import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = `${environment.apiUrl}/carImages`;

  constructor(private httpClient: HttpClient) {}

  getImagesByCarId(id: number): Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(
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
