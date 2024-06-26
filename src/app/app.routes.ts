import { Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: "full" },
    { path: 'inicio', component: InicioComponent },
    { path: 'registro', component: RegistrarseComponent },
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'login', component: LoginComponent},
    { path: '**', component: ErrorComponent }
];
