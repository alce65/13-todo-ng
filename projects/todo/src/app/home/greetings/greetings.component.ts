import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isi-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
})
export class GreetingsComponent implements OnInit {
  userName!: string;
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.userName = '';
  }
}
