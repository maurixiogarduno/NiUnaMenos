import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {CardModule} from 'ngx-card/ngx-card';

import { IonicModule } from '@ionic/angular';

import { CardPage } from './card.page';

const routes: Routes = [
  {
    path: '',
    component: CardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardPage]
})
export class CardPageModule {}
