import { MatStepperIntl } from '@angular/material/stepper';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { PostbookComponent } from './postbook/postbook.component';
import { FooterComponent } from './footer/footer.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ClientComponent } from './client/client.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { StockComponent } from './stock/stock.component';
import { LivreComponent } from './livre/livre.component';
import { CommandesComponent } from './commandes/commandes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ECommerceComponent,
    HomeComponent,
    HeaderComponent,
    PostbookComponent,
    FooterComponent,
    CategorieComponent,
    ClientComponent,
    EmpruntComponent,
    DashboardComponent,
    FournisseurComponent,
    MenuComponent,
    NavbarComponent,
    ProfileComponent,
    StockComponent,
    LivreComponent,
    CommandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatRadioModule,
    MatStepperModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
  ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
