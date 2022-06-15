import { Component, Input, OnInit } from '@angular/core';
import { iMenuOptions } from '../../interfaces/menu-options';

@Component({
  selector: 'isi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() options!: Array<iMenuOptions>;
  constructor() {}

  ngOnInit(): void {
    console.log(this.options);
  }
}
