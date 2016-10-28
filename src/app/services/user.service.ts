import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http) {
  }

  public getUsers = function() {
    console.log('getting users...');
  }

}
