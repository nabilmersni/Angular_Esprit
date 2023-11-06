import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HomeComponent } from './workshop/home/home.component';
import { NotFoundPageComponent } from './workshop/not-found-page/not-found-page.component';
import { MainUserComponent } from './workshop/main-user/main-user.component';
import { ListUserComponent } from './workshop/list-user/list-user.component';

const routes: Routes = [
  {
    path: 'invoiceManagement',
    component: MainInvoiceComponent,
  },
  {
    path: 'invoice/:id',
    component: InvoiceComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'mainUser',
    component: MainUserComponent,
    children: [{ path: 'category/:category', component: ListUserComponent }],
  },

  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
