import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'isi-home',
  template: `<h2>Home</h2>
    <isi-greetings></isi-greetings>`,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
