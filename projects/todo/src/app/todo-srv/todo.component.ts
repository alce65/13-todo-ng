import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isi-todo',
  template: `
    <h2>todos</h2>
    <isi-list></isi-list>
  `,
  styles: [],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
