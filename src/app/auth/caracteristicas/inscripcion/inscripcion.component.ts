import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';
import { AuthService } from '../../data-access/auth.service';
import { isRequired,hasEmailError  } from '../../utils/validators';
import { hasCustomClaim } from '@angular/fire/auth-guard';
import { GoogleButtonComponent } from '../../interfaz-usuario/google-button/google-button.component';
export interface FormSignIn {
  email: FormControl<string | null >;
  password: FormControl<string | null>;
}
@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink,GoogleButtonComponent],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export  class InscripcionComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

   isRequired(field: 'email' | 'password'){
    return this.form.get(field)?.hasError('required') && this.form.get(field)?.touched;
  }

  hasEmailError(){
    return hasEmailError(this.form);
   }


  form = this._formBuilder.group<FormSignIn>({

    email: this._formBuilder.control('', [
        Validators.required,
        Validators.email,
    ]),
    password: this._formBuilder.control('', Validators.required),
  });

  async submit(){
    if (this.form.invalid) return;
    try {

      const {email, password} = this.form.value;
    if( !email || !password) return;
    /*console.log({email, password});*/
   await this._authService.signIn({email, password});

   toast.success('Hola nuevamente');
   this._router.navigateByUrl('/tasks');
    } catch (error) {
      toast.error('Ocurrio un error');

    }
}
async submitWithGoogle() {
  try {
    await this._authService.signInWithGoogle();
    toast.success('Hola nuevamente');
    this._router.navigateByUrl('/tasks');
  } catch (error){
    toast.error('Ocurrio un error');

  }
}
}
