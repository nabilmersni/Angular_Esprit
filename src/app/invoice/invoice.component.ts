import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/models/Invoice';
import { InvoiceListComponent } from '../invoice-list/invoice-list.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  currentInvoice: Invoice | undefined;

  constructor(private activeRouted: ActivatedRoute) {}
  ngOnInit(): void {
    let invoiceIdRoute = this.activeRouted.snapshot.params['id'];
    let invoiceIdQuery = this.activeRouted.snapshot.queryParams['id'];

    let invoiceId = invoiceIdRoute || invoiceIdQuery;

    this.currentInvoice = InvoiceListComponent.invoices.find(
      (invoice) => invoice.idFacture == invoiceId
    );
  }
}
