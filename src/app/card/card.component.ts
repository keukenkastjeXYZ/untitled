import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() background: string;

  constructor() { }

  ngOnInit(): void {
    this.background = "#0d3c68"
  }

}
