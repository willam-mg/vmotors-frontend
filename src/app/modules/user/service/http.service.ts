import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { environment } from "src/environments/environment";

const httpHeaders = {
  headers: new HttpHeaders(environment.apiConfig.headers),
}
const path = environment.apiConfig.path;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postLibros(user: User) {
    return this.http.post(`${path}/users/create`, user, httpHeaders);
  }
}
