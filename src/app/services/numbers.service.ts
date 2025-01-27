import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  // private apiUrl = 'https://call-t0fi.onrender.com/numeros';
  private apiUrl = 'http://localhost:3030/numeros';
  constructor(private http: HttpClient, private router: Router) { }

  getNewNumbers(rol:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/getNewNumbers/admin`, {
      params: { role: rol }
    });
  }

  getContactedNumbers(rol:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/getContactedNumbers/admin`, {
      params: { role: rol }
    });
  }

  getInaccessibleNumbers(rol:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/getInaccessibleNumbers/admin`, {
      params: { role: rol }
    });
  }

  getTimeUsed(rol:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/getTimeUsed/admin`, {
      params: { role: rol }
    });
  }

  getContactedNumbersUser(rol:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/getContactedNumbers/user`, {
      params: { role: rol }
    });
  }

  deleteNumber(id: number): Observable<any> {
    console.log(id)
      return this.http.post(`${this.apiUrl}/deleteNumber/admin`, id);
    }

  uploadExcel(file: File, rol:string): Observable<any> {
    const formData = new FormData();
    formData.append('myFile', file); // 'myFile' debe coincidir con el nombre usado en Multer

    return this.http.post(`${this.apiUrl}/insertarNuevosNumeros/admin`, formData, {
      params: { role: rol }
    }).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error en la subida:', error);
    return throwError('Hubo un problema al subir el archivo. Inténtalo de nuevo.');
  }
}
