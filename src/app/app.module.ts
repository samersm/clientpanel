import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ClientsComponent } from './views/clients/clients.component';
import { AddClientComponent } from './views/clients/add-client/add-client.component';
import { EditClientComponent } from './views/clients/edit-client/edit-client.component';
import { ClientDetailsComponent } from './views/clients/client-details/client-details.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { SettingsComponent } from './views/settings/settings.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

// Service Imports
import { ClientService } from './services/client.service';
import { environment } from './../environments/environment';


const appRoutes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    // AngularFireAuth,
    // AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
