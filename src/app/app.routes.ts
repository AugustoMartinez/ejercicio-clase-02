import { Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: "full" },
    { path: 'inicio', component: BienvenidoComponent },
    { path: 'login', component: LoginComponent},
    { path: '**', component: ErrorComponent }
];
