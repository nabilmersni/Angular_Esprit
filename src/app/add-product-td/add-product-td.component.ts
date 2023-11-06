import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product-td',
  templateUrl: './add-product-td.component.html',
  styleUrls: ['./add-product-td.component.scss'],
})
export class AddProductTDComponent {
  hidden: boolean = true;
  valid: boolean = false;

  addProduct(f: any) {
    console.log(f);
  }

  nextEvent() {
    this.hidden = !this.hidden;
  }
}
