import { Component, OnInit } from '@angular/core';
import { dataImage } from './shared/models/fakeData';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title: string = 'Hello World';

  ngOnInit(): void {
    initFlowbite();
  }
}
