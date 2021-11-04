import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url: string = environment.url;
  endpoint: string = '';
  constructor(private http: HttpClient, private router: Router) { }

  async get() {
    try {
      return await this.http.get(`${this.url}/${this.endpoint}`).toPromise();
    } catch (error) {
      return error;
    }
  }

  private HttpOptions() {
    let httpOptions = {};
    const token = localStorage.getItem('JWT');
    if (token) {
      httpOptions = {
        headers: new HttpHeaders({
          Authorization: token
        })
      }
    }
    return httpOptions;
  }

  async post(obj: any) {
    try {
      return await this.http.post(`${this.url}/${this.endpoint}`, this.HttpOptions());
    } catch (e) {
      return this.handlerError(e)
    }
  }

  handlerError(e: any) {
    e.status === 401 ? this.router.navigate(['login']) : null;
    e.status === 404 ? this.router.navigate(['notFoud']) : null;
    e.status === 500 ? this.router.navigate(['ISE']) : null;
  }

  setEndPoint(endpoint: string) {
    this.endpoint = endpoint;
  }

  // redirigir() {
  //   this.router.navigate(['characters', '1']); // toma un vector, la coma funciona como una barra /
  //   this.router.navigateByUrl(['characters/1']);
  //   }

}
