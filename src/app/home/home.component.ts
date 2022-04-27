import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: Array<{name: string, image: string, type:string}> = [
    {
      name: "Wedding",
      image: "./assets/wedding.jpg",
      type: "weddingphotos"
    },
    {
      name: "Portrait",
      image: "./assets/portrait.jpg",
      type: "portrait"
    },
    {
      name: "Dancing",
      image: "./assets/dancing.jpg",
      type: "dancingphotos"
    },
    {
      name: "Landscape",
      image: "./assets/landscape.jpg",
      type: "landscapephotos"
    },
    {
      name: "Studio Photos",
      image: "./assets/studio.jpg",
      type: "studiophotos"
    },
    {
      name: "Architecture",
      image: "./assets/architecture.jpg",
      type: "architecturephotos"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
