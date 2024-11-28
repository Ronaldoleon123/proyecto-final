import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

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

  form = this._formBuilder.group<FormSignUp>({

    email: this._formBuilder.control('', [
        Validators.required,
        Validators.email,
    ]),
    password: this._formBuilder.control('', Validators.required),
  });

  submit(){
    if (this.form.invalid) return;
    const {email, password} = this.form.value;
    if( !email || !password) return;
    console.log({email, password});
}
}