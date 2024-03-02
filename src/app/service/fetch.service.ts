import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  fetchData () {
    return this.http.get("https://reqres.in/api/users?page")
  }
}
