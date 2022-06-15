import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo';
  options: Array<any>;
  constructor() {
    this.options = [
      { path: './index.html', label: 'Home' },
      { path: './todo.html', label: 'Tasks' },
      { path: '/about.html', label: 'About' },
    ];
  }

  ngOnInit(): void {}
}
