import { Component, effect, inject } from '@angular/core';
import { TablaComponent } from '../../ui/tabla/tabla.component';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../data-access/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TablaComponent, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export  class TaskListComponent {
  tasksService = inject(TaskService);


}
