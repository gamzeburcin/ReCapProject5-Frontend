import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDtoResponseModel } from '../models/rentalDetailDtoResponseModel';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44326/api/rentals/getrentaldetaildtos"

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalDetailDtoResponseModel>{
    return this.httpClient.get<RentalDetailDtoResponseModel>(this.apiUrl);
  }
}