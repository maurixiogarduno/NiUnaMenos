import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public loadingController: LoadingController, public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Realizando Cobro',
      duration: 500
    });
    await loading.present()

    const alert = await this.alertController.create({
      header: 'Transacción Exitosa',
      subHeader: 'Código de Seguimiento: 5465234',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'example@mail.com'
        }],
      message: 'Quieres que enviemos un comprobante a tu correo electronico.',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Sí',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 2000,
      message: 'Iniciando Sesión',
      translucent: false,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
