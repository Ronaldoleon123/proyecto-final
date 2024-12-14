import { Component, effect, input } from '@angular/core';
import { Task } from '../../data-access/task.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  tasks = input.required<Task[]>();

}
