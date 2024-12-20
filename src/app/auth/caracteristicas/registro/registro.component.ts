import { Component, inject } from '@angular/core';
import { hasCustomClaim } from '@angular/fire/auth-guard';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';
import { hasEmailError, isRequired } from '../../utils/validators';
import { GoogleButtonComponent } from '../../interfaz-usuario/google-button/google-button.component';



interface FormSignUp {
  email: FormControl<string | null >;
  password: FormControl<string | null>;
}
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, GoogleButtonComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export  class RegistroComponent {

  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

   isRequired(field: 'email' | 'password'){
    return this.form.get(field)?.hasError('required') && this.form.get(field)?.touched;
  }
   
   hasEmailError(){
    return hasEmailError(this.form);
   }



  form = this._formBuilder.group<FormSignUp>({

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
   /* console.log({email, password});*/
   await this._authService.signUp({email, password});

   toast.success('Usuario creado correctamente');
   this._router.navigateByUrl('/tasks');
    } catch (error) {
      toast.error('Ocurrio un error');

    }
}

async submitWithGoogle() {
  try {
    await this._authService.signInWithGoogle();
    toast.success('Usuario creado correctamente');
    this._router.navigateByUrl('/tasks');
  } catch (error){
    toast.error('Ocurrio un error');

  }
}
}