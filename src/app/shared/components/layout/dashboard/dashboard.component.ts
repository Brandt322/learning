import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any[] = []
  ngOnInit(): void {
  }

  constructor() { }

  handleData(data: any[]) {
    console.log(data);
    this.data = data;
    // Aquí puedes hacer algo con los datos

  }


}
