import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atm } from '../models/atm';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  selectedAtm: Atm;
  atms: Atm[];
  readonly URL_API = 'http://localhost:3002/openbanking';

  constructor(private http: HttpClient) { 
    this.selectedAtm = new Atm();
  }

  getAtms(){
    return this.http.get(this.URL_API);
  }

  postAtm(Atm: Atm){
    return this.http.post(this.URL_API, Atm);
  }

  putAtm(atm: Atm){
    return this.http.put(this.URL_API + `/${atm._id}`, atm);
  }

  deleteAtm(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
