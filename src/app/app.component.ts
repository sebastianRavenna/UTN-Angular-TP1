import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MainComponent],
  templateUrl: './app.component.html',
  
  // template: `
  //   <h1>Bienvenido Yo</h1>  
  // `,
  // tilde al reves ` alt+96 
  
  styleUrl: './app.component.css'
})
export class AppComponent {
  Name = '';
  
}
