import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public appAmigos = [
    {
      title:'Gaby Hernandez',
      url: 'Amigos',
      icon: 'woman'
    },
    {
      title:'Javier Gonzalez',
      url: 'Amigos',
      icon: 'men'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
