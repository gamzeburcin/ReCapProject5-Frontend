import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { environment } from 'src/environments/environment';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = environment.apiUrl +'rentals/getallrentaldetails'
  constructor(private httpClient:HttpClient) { }
  getRental(): Observable<ListResponseModel<Rental>>{

    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);

  }
}