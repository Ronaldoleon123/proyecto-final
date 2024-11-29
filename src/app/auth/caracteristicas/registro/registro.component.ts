import { Component, inject } from '@angular/core';
import { hasCustomClaim } from '@angular/fire/auth-guard';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';



interface FormSignUp {
  email: FormControl<string | null >;
  password: FormControl<string | null>;
}
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export  class RegistroComponent {

  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);

   isRequired(field: 'email' | 'password'){
    return this.form.get(field)?.hasError('required') && this.form.get(field)?.touched;
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
    console.log({email, password});
   await this._authService.signUp({email, password});

   toast.success('Usuario creado correctamente');
    } catch (error) {
      toast.error('Ocurrio un error');

    }
}
}