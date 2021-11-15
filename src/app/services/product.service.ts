import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../products';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url: string = environment.url;
  constructor(private http: HttpClient) { }

  //simple get method
  // getProducts() {
  //   return this.http.get(this._url+'/products')
  // }

  //Get data with observabale
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this._url+'/products')
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(error.message);
  }


  //get data by a specific query
  getProductDetails(id){
    const options = id ? { params: new HttpParams().set('id', id)} : {}; // if you want to include parameter to you api
    return this.http.get(this._url+'/product/'+id);
    //  return this.http.get(this._url+'/product/', options); // if you need to pass parameter
  }
}
