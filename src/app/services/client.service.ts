import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  // Firebase Course Code
  // clients: FirebaseListObservable<any[]>;
  // client: FirebaseObjectObservable<any>;

  constructor(
    // public af:AngularFireDatabase
  ) {
    // Firebase Course Code
    // this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
   }

   // Firebase Course Code
  //  getClients(){
  //    return this.clients;
  //  }

}
