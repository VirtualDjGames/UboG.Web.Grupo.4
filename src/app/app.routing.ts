import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InicioModule } from './inicio/inicio.module';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';

export const routes: Routes =[

    { path: 'home', component: HomeComponent },
    { path: 'biblioteca', component: BibliotecaComponent },
    { path: 'videojuego', component: VideojuegoComponent },
    { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }

]; 

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { 
  
}
