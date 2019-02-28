import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public appPages = [
    {
      title:'Buscar',
      url: 'Buscar',
      icon: 'search'
    },
    {
      title:'Playlist',
      url: 'Playlist',
      icon: 'musical-note'
    },
    {
      title:'Genero',
      url: 'Reproductor',
      icon:'microphone'
    },
    {
      title:'Artistas',
      url: 'Reproductor',
      icon:'contacts'
    },
    {
      title:'Favoritos',
      url: 'Reproductor',
      icon:'heart'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
