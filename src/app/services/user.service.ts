import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  submitUser(user){
    return this.http.post(this._url+'/user', user);
  }
  getUsers(){
    return this.http.get(this._url+'/users');
  }

  deleteUser(id: number){
      return this.http.delete(this._url+'/user/'+id);
  }

}
