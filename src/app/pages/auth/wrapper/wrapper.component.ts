import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  imports: [RegisterComponent, LoginComponent, CommonModule]
})
export class WrapperComponent {
  isLogin = true;
}
