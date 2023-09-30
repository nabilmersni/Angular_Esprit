import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { FormsModule } from '@angular/forms';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';

@NgModule({
  declarations: [AppComponent, ListProduitsComponent, ListFournisseurComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
