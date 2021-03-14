import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = `${environment.apiUrl}/colors`;

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ColorResponseModel> {
    return this.httpClient.get<ColorResponseModel>(`${this.apiUrl}/getall`);
  }
}
