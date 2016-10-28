import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private _baseUrl = 'http://localhost:8888/api/';

  constructor(private _http: Http) {
  }

  public getUsers = function() {
    return this._http.get(this._baseUrl + 'users').map(response => response.json().data);
  }

}
