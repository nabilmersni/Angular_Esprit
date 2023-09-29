import { Component } from '@angular/core';
import { Produit } from 'src/models/Produit';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.scss'],
})
export class ListProduitsComponent {
  products: Produit[] = [
    {
      idProduit: 1,
      code: 'P147852P',
      libelle: 'Produit1',
      prixUnitaire: 12.5,
      tauxTVA: 0.02,
    },
    {
      idProduit: 2,
      code: 'P147552P',
      libelle: 'Produit2',
      prixUnitaire: 30,
      tauxTVA: 0.198,
    },
    {
      idProduit: 3,
      code: 'D14785CC',
      libelle: 'Produit3',
      prixUnitaire: 20,
      tauxTVA: 0.198,
    },
    {
      idProduit: 4,
      code: 'E147852P',
      libelle: 'Produit4',
      prixUnitaire: 50,
      tauxTVA: 0.198,
    },
    {
      idProduit: 5,
      code: 'F147852P',
      libelle: 'Produit5',
      prixUnitaire: 70,
      tauxTVA: 0.02,
    },
  ];

  updateTVA = (index: number) => {
    this.products[index].tauxTVA = 0.02;
  };

  searchCode: string = '';

  searchedProducts = () => {
    return this.products.filter((p) =>
      p.code.toLowerCase().startsWith(this.searchCode)
    );
  };

  addProduct(addForm: any) {
    this.products.push(addForm.value);
  }
  //
}
