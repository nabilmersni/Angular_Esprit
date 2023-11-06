import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { FormsModule } from '@angular/forms';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AccueilComponent } from './workshop/accueil/accueil.component';
import { ListUserComponent } from './workshop/list-user/list-user.component';
import { HeaderComponent } from './workshop/header/header.component';
import { HomeComponent } from './workshop/home/home.component';
import { MainUserComponent } from './workshop/main-user/main-user.component';
import { MainProductComponent } from './workshop/main-product/main-product.component';
import { MainProviderComponent } from './workshop/main-provider/main-provider.component';
import { NotFoundPageComponent } from './workshop/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitsComponent,
    ListFournisseurComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    AccueilComponent,
    ListUserComponent,
    HeaderComponent,
    HomeComponent,
    MainUserComponent,
    MainProductComponent,
    MainProviderComponent,
    NotFoundPageComponent,
    AddProductTDComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
