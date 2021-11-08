import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url: string = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  // getProducts() {
  //   return this.http.get(this._url+'/products')
  // }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this._url+'/products')
    .pipe(catchError(this.errorHandler));
  }
  getUsers() {
    return this.http.get(this._url+'/users')
  }


  errorHandler(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(error.message);
  }
}
