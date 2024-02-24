import { Component, OnInit } from '@angular/core';
import { dataImage } from 'src/app/shared/models/fakeData';
import { JsonplaceholderService } from '../../../../services/jsonplaceholder.service';
import { Posts } from 'src/app/shared/models/entities';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private jsonplaceHolderService: JsonplaceholderService) { }

  dataImage = dataImage;

  posts: Posts[] = []

  ngOnInit(): void {
    this.getPosts()
    console.log(this.posts)
  }

  getPosts(): void {
    this.jsonplaceHolderService.getPosts().subscribe((data) => {
      const five = data.slice(0, 5)
      this.posts.push(...five)
    })
  }


}
