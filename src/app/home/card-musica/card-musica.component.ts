import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-card-musica',
  templateUrl: './card-musica.component.html',
  styleUrls: ['./card-musica.component.css']
})
export class CardMusicaComponent implements OnInit {

  @Input() dados:any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
