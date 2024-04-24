import { Component } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { ErrorComponent } from '../error/error.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, BienvenidoComponent, ErrorComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user : Usuario = new Usuario("Augusto", "12345")
  usuario : string = ""
  clave : string = ""

  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  validarUsuario(){
    if(this.usuario == this.user.nombre && this.clave == this.user.clave){
      this.goTo("bienvenido")
    }
  }

}

