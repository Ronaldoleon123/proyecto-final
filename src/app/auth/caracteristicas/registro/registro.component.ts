import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

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

  form = this._formBuilder.group<any>({

    email: [''],
    password: [''],
  });
}
