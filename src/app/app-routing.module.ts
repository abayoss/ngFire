import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { PageNotFoundComponent } from './Components/layout/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { ListClientsComponent } from './Components/Client/list-clients/list-clients.component';
import { AddClientComponent } from './Components/Client/add-client/add-client.component';
import { EditClientComponent } from './Components/Client/edit-client/edit-client.component';
import { ShowClientComponent } from './Components/Client/show-client/show-client.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: ListClientsComponent },
  { path: 'add', component: AddClientComponent, canActivate: [AuthGuard] },
  { path: 'edit/:idclient', component: EditClientComponent, canActivate: [AuthGuard] },
  { path: 'show/:id', component: ShowClientComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
