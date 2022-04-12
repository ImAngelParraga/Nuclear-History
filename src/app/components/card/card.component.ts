import { Component, Input, OnInit } from '@angular/core';
import { AreasFilenames, CardRun, NTRun, ntRunToCardRun } from 'src/app/shared/nt-object';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() run!: NTRun;
  card!: CardRun;
  areaFilename!: string;

  constructor() { }

  ngOnInit(): void {
    this.card = ntRunToCardRun(this.run);
    this.areaFilename = AreasFilenames[this.card.world];
  }

}
