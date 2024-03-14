import { Component, OnInit } from '@angular/core';
import { SharedInfoService } from 'src/app/services/shared-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myCart$ = this.sharedInfoService.mycart$;

  constructor(private sharedInfoService: SharedInfoService) { }


  ngOnInit(): void {
  }

}
