import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {

  private apiUrl = 'http://localhost:4200/tasks'

  constructor(private http: HttpClient) { }

  sendRecoveryEmail(email: string): Observable<any>{
    return this.http.post('${this.apiUrl}/auth/forgot-password', {email});

  }
}
