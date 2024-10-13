import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogInComponent } from "./components/log-in/log-in.component";
import { RegisterComponent } from "./components/register/register.component";
import { ComponentsComponent } from './components/components.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsComponent, LogInComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Library';
}
