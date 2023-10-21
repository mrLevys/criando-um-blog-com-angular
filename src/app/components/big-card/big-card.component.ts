import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover:string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  cardDescription:string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id mollitia sit aliquam omnis itaque autem suscipit velit saepe atque maiores vero beatae delectus, reiciendis non, voluptates explicabo numquam sequi soluta?'

  constructor(){

  }
}
