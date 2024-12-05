import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, user } from '@angular/fire/auth';

export interface User{
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth = inject(Auth);

  signUp(User: User){
    return createUserWithEmailAndPassword(
      this._auth,
      User.email,
      User.password
    );
  };

  signIn(User: User){
    return signInWithEmailAndPassword(this._auth, User.email, User.password);
  }

}
