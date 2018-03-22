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
  clients: Observable<any[]>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.clients = this.getClients('/clients');
   }

  ngOnInit() {
  }

  getClients(listPath): Observable<any[]> {
  return this.db.list(listPath).valueChanges();
  }

}
