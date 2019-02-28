import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

import { InicioPage } from '../inicio/inicio.page';
import { MatchPage } from '../match/match.page';
import { PerfilPage } from '../perfil/perfil.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(inicio:inicio)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      {
        path: 'inicio',
        outlet: 'inicio',
        component: InicioPage
      },
      {
        path: 'match',
        outlet: 'match',
        component: MatchPage
      },
      {
        path: 'perfil',
        outlet: 'perfil',
        component: PerfilPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(inicio:inicio)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
