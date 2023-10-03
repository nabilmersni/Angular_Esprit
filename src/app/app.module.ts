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

@NgModule({
  declarations: [AppComponent, ListProduitsComponent, ListFournisseurComponent, MainInvoiceComponent, InvoiceListComponent, InvoiceComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
