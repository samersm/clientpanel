import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  // clients:Client[];
  clients: Observable<any[]>;

  constructor(
    // public clientService:ClientService
    private db: AngularFireDatabase
  ) {
    // this.clients = db.collection('/clients').valueChanges();
    this.clients = this.getClients('/clients');
   }

  ngOnInit() {
    // Firebase Course Code
    // this.clientService.getClients().subscribe(clients => {
    //   this.clients = clients;
    //   console.log(this.clients);
    // });
  }

  getClients(listPath): Observable<any[]> {
  return this.db.list(listPath).valueChanges();
  }

}
