import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export  class TaskFormComponent {
  private _formBuilder = inject(FormBuilder);


  form = this._formBuilder.group({
    title: this._formBuilder.control('', [Validators.required]),
    completed: this._formBuilder.control(false ,[Validators.required]),
  })

  submit() {
    if (this.form.invalid) {
      alert('Formulario inválido. Verifica los campos.'); // Mensaje de error amigable
      return;
    }

    // Imprime el valor del formulario en la consola
    console.log('Formulario enviado:', this.form.value);

    // Simula un guardado exitoso
    alert('Tarea guardada exitosamente.');
  }


}
