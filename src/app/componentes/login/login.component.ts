import { Component } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, BienvenidoComponent, ErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user : Usuario = new Usuario("Augusto", "12345")
  usuario : string = ""
  clave : string = ""


  }

