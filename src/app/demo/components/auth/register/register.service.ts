import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8080/api/auth/register';  // URL de votre backend

  constructor(private http: HttpClient) { }

  registerUser(email: string, password: string): Observable<any> {
    const user = { email, password };
    return this.http.post<any>(this.apiUrl, user);
  }
}
