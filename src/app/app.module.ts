import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import angularfire
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './Components/layout/navbar/navbar.component';
import { PageNotFoundComponent } from './Components/layout/page-not-found/page-not-found.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { FormsModule } from '@angular/forms';
import { ShowClientComponent } from './Components/Client/show-client/show-client.component';
import { ListClientsComponent } from './Components/Client/list-clients/list-clients.component';
import { AddClientComponent } from './Components/Client/add-client/add-client.component';
import { EditClientComponent } from './Components/Client/edit-client/edit-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    ShowClientComponent,
    AddClientComponent,
    EditClientComponent,
    ListClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.ngFire),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
