import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'Inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'Match', loadChildren: './match/match.module#MatchPageModule' },
  { path: 'Perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'Reproductor', loadChildren: './reproductor/reproductor.module#ReproductorPageModule' },
  { path: 'Buscar', loadChildren: './buscar/buscar.module#BuscarPageModule' },
  { path: 'Playlist', loadChildren: './playlist/playlist.module#PlaylistPageModule' },
  { path: 'Amigos', loadChildren: './amigos/amigos.module#AmigosPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
