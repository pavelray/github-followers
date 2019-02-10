import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{

  constructor(http: Http) { 
    super('http://api.github.com/users/mosh-hamedani/followers', http)
  }
}
