import { Component, SimpleChange } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterLink, SinglePostComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  posts: {
    name: string;
    image: string;
    likes: number;
    isLiked: boolean;
  }[] = [
      {
        name: "Hans",
        image: "./assets/img/banana.jpg",
        likes: 97,
        isLiked: true,
      },
      {
        name: "Franz",
        image: "./assets/img/currant.jpg",
        likes: 97,
        isLiked: false,
      },
      {
        name: "Hans",
        image: "./assets/img/orange.jpg",
        likes: 97,
        isLiked: true,
      }
    ];
}

