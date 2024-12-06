import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

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
    Title: this._formBuilder.control('', Validators.required),
    completed: this._formBuilder.control(false ,Validators.required),
  })

  submit(){
    if(this.form.invalid) return;

    console.log(this.form.value)
  }


}
