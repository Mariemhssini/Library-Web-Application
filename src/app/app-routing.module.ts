import { PostbookComponent } from './postbook/postbook.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { StockComponent } from './stock/stock.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProfileComponent } from './profile/profile.component';
import { LivreComponent } from './livre/livre.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'e-commerce', component: ECommerceComponent },
  { path: 'home', component: HomeComponent },
  { path: 'postbook', component: PostbookComponent },
  {path:"dashboard" , component:DashboardComponent},
  {path: "list_Clients" , component:ClientComponent},
  {path: "list-Fournisseurs" , component:FournisseurComponent},
  {path : "list-Categories" , component:CategorieComponent},
  {path : "list-Livres" , component:LivreComponent},
  {path : "profile" , component:ProfileComponent},
  {path : "stock" , component:StockComponent},
  {path : "profile" , component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
