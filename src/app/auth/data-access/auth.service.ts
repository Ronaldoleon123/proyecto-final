import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, user, sendPasswordResetEmail } from '@angular/fire/auth';

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

  // Método para recuperar la contraseña
  recoverPassword(user: User) {
    return sendPasswordResetEmail(this._auth, user.email);
  }

  async reloadUser(): Promise<void> {
    const user = this._auth.currentUser;
    if (user) {
      await user.reload();
    }
  }
  get isEmailVerified$(): boolean {
    return this._auth.currentUser?.emailVerified ?? false;
  }

}
