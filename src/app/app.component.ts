import {Component, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatFormField, MatInput, MatLabel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-mat3';

  constructor(private renderer: Renderer2) {
  }

  toggle(){
    if(document.body.className.includes("dark")){
      this.renderer.removeClass(document.body, "dark")
    } else{
      this.renderer.addClass(document.body, "dark")
    }
  }
}
