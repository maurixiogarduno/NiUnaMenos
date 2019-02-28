import { Component, OnInit } from '@angular/core';
import { AtmService } from '../services/atm.service';
import { NgForm } from '@angular/forms';
import { Atm } from '../models/atm';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
  providers:[AtmService]
})
export class PlaylistPage implements OnInit {

  playlist = null

  constructor(private atmService: AtmService, public toastController: ToastController) { }

  ngOnInit() {
    this.getAtms();
  }

  addAtm(form: NgForm){
    if(form.value._id){
      this.atmService.putAtm(form.value)
        .subscribe(res => {
          // console.log(res);
          this.playlist = res
          console.log("aqui")
          this.resetForm(form);
          this.getAtms();
          this.mUpdate();
        });
    } else {
      console.log(form.value);
    this.atmService.postAtm(form.value)
      .subscribe(res => {
        // console.log(res);
        this.playlist = res
        console.log("aqui")
        this.resetForm(form);
        this.getAtms();
        this.mSave();
      });
    }
  }

  getAtms(){
    this.atmService.getAtms()
      .subscribe(res => {
        this.atmService.atms = res as Atm[];
        console.log(res);
      });
  }

  editAtm(atm: Atm) {
    this.atmService.selectedAtm = atm;
  }

  deleteAtm(_id: string, form: NgForm) {
      this.atmService.deleteAtm(_id)
        .subscribe(res => {
          this.getAtms();
          this.resetForm(form);
          this.mDelete()
        });
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.atmService.selectedAtm = new Atm();
    }
  }

  async mSave() {
    const toast = await this.toastController.create({
      message: 'Playlist Creada y Guardada.',
      duration: 2000
    });
    toast.present();
  }

  async mDelete() {
    const toast = await this.toastController.create({
      message: 'Playlist Eliminada.',
      duration: 2000
    });
    toast.present();
  }

  async mUpdate() {
    const toast = await this.toastController.create({
      message: 'Playlist Actualizada.',
      duration: 2000
    });
    toast.present();
  }

}