import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiControllerUrl = `${environment.apiUrl}/rentals`;
  rentalCheckout?: Rental;

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(
      `${this.apiControllerUrl}/getall`
    );
  }

  isRentable(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/isrentable`,
      rental
    );
  }

  checkFindeksScoreSufficiency(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/checkfindeksscoresufficiency`,
      rental
    );
  }

  add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/add`,
      rental
    );
  }
}
