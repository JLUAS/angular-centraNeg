import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  private apiUrl = 'http://localhost:3030/numeros';
  constructor(private http: HttpClient, private router: Router) { }

  getNumbers(rol:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/getNumbers/admin`, {
      params: { role: rol }
    });
  }
}
