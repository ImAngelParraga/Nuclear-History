import { Component, Input, OnInit } from '@angular/core';
import { Characters, NTRun } from 'src/app/shared/nt-object';

@Component({
  selector: 'app-cards-group',
  templateUrl: './cards-group.component.html',
  styleUrls: ['./cards-group.component.css']
})
export class CardsGroupComponent implements OnInit {

  /*
  runs: NTRun[] = [
    { char: 4, 
      charlvl: 1,
      crown: 1,
      health: 0,
      kills: 5,
      lasthit: 0,
      level: 1,
      loops: 0,
      mutations: "00000000000000000000000000000",
      skin: 0,
      steamid: "76561198087280180",
      timestamp: 1634581440,
      type: "normal",
      ultra: 0,
      wepA: 1,
      wepB: 0,
      win: true,
      world: 1},

      { char: 4, 
        charlvl: 1,
        crown: 1,
        health: 0,
        kills: 5,
        lasthit: 0,
        level: 1,
        loops: 0,
        mutations: "00000000000000000000000000000",
        skin: 0,
        steamid: "76561198087280180",
        timestamp: 1634581440,
        type: "normal",
        ultra: 0,
        wepA: 1,
        wepB: 0,
        win: true,
        world: 1}
  ];*/

  @Input() runs!: NTRun[];

  constructor() { }

  ngOnInit(): void {
    var a = Characters[4];
  }


}
