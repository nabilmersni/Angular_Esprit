import { Component } from '@angular/core';
import { Fournisseur } from 'src/models/Fournisseur';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.scss'],
})
export class ListFournisseurComponent {
  ////////////////// EX1
  idFournisseur = 105;
  code = 'A104B89';
  libelle = 'MyTeck';
  hide: boolean = false;

  toggleFournisseur = () => {
    this.hide = !this.hide;
    console.log(this.hide);
  };

  ////////////////// EX2
  fournisseurs: Fournisseur[] = [
    { idFournisseur: 1, code: '1ABC4522', libelle: 'hp' },
    { idFournisseur: 2, code: '2ABC4522', libelle: 'dell' },
    { idFournisseur: 3, code: '3ABC4522', libelle: 'lenovo' },
    { idFournisseur: 400, code: '40ABC452', libelle: 'asus' },
  ];

  deleteFournisseur = (index: number) => {
    console.log(index);
    this.fournisseurs.splice(index, 1);
  };
}
