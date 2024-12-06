import { Component } from '@angular/core';
import { TablaComponent } from '../../ui/tabla/tabla.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TablaComponent, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export  class TaskListComponent {}
