import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {
  user : Usuario = new Usuario("","")
  usuario : string = ""
  clave : string = ""

  comprobarCampoVacio() : boolean{
    
    if(this.usuario == "" && this.clave == ""){
      return false
    }
    else{
      return true
    }
  }

  guardarUsuarioLocalStorage(userioNuevo: Usuario) {
    const usuarioStr = JSON.stringify(userioNuevo);
    localStorage.setItem("usuario", usuarioStr);
    console.log(usuarioStr)
  }

  registrarUsuario(){
    if(this.comprobarCampoVacio()){
      this.user.nombre = this.usuario
      this.user.clave = this.clave
      this.guardarUsuarioLocalStorage(this.user)
      alert("Se registro correctamente")   
    }
    else{

      alert("Los campos no pueden estar vacios")
    }
  }
}
