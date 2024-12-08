import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskCreate, TaskService } from '../../data-access/task.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';



@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export  class TaskFormComponent {
  private _formBuilder = inject(FormBuilder);
  private _taskService = inject(TaskService);
  private _router = inject(Router);

  loading = signal(false);


  form = this._formBuilder.group({
    title: this._formBuilder.control('', [Validators.required]),
    completed: this._formBuilder.control(false ,[Validators.required]),
  });

  async submit() {
    if (this.form.invalid) return;

    try {
      this.loading.set(true);
      const {title, completed}= this.form.value;
      const task: TaskCreate ={
        title: title || '',
        completed: !! completed,
      };

      await this._taskService.create(task);

      toast.success('tarea creada');
      this._router.navigateByUrl('/tasks');
    }catch (error) {
      toast.success('ocurrio un problema');
    } finally{
      this.loading.set(false);
    }
  
  

  }
}
