import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  // getting contacts and save in local-storage
  getContacts() {
    return this.http.get('http://demo.sibers.com/users');
  }
}
