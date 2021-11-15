import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = environment.url;
  constructor(private http: HttpClient) { }


  //Transfer Data to you backend from you signup form (user is the value from the profileForm)
  submitUser(user){
    return this.http.post(this._url+'/user', user);
  }
  //sample get method to list all the users
  getUsers(){
    return this.http.get(this._url+'/users');
  }

  //Incase you will be needing a remove account you can use the delete method
  deleteUser(id: number){
      return this.http.delete(this._url+'/user/'+id);
  }

  //login pass the parameter email and password
  login(email :any, password: any){
      return this.http.post(this._url+'/login-user', {email, password}); 
  }

//Update Data to you backend from you profile form (user is the value from the profileForm)
  updateUserProfile(userFormValue){
    return this.http.put(this._url+'/update-user', userFormValue);
  }
}
