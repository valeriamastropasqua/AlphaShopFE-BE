import { Component, OnInit } from '@angular/core';

import { ArticoliService } from 'src/app/core/services/articoli.service';
import { IArticoli } from 'src/app/shared/models/Articoli';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent  implements OnInit  {

  articoli$ : IArticoli[] = [];

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoli$ = this.articoliService.getArticoli();
    console.log(this.articoli$);
  }

  handleEdit = (articolo : IArticoli) => {
    console.log("Cliccato tasto modifica del codice " + articolo.codart);
  }

  handleDelete = (articolo : IArticoli) => {
    console.log("Cliccato tasto elimina del codice " + articolo.codart);

    this.articoli$.splice(this.articoli$.findIndex(x => x.codart === articolo.codart), 1);
    console.log(this.articoli$);

  }

}
