import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/login'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { email, password };

    return this.http.post<boolean>(this.apiUrl, body, { headers });
  }
}
