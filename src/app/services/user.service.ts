import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserInterface } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private _baseUrl = 'http://localhost:8888/api/';

  constructor(private _http: Http) {
  }

  public getUsers = function() {
    return this._http.get(this._baseUrl + 'users')
      .map(response => <UserInterface[]> response.json().data.map(userData => new UserModel(userData)));
  };

  public getLoggedIn = function() {
    return this._http.get(this._baseUrl + 'users/loggedin')
      .map(response => <UserInterface> response.json().data)
      .map(userData => new UserModel(userData));
  };

  public getUserById = function(id: number) {
    return this._http.get(this._baseUrl + 'user/' + id)
      .map(response => new UserModel(<UserInterface> response.json().data))
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  };

}
