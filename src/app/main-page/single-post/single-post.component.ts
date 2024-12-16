import { Component, Input } from '@angular/core';
import { MainPageComponent } from '../main-page.component';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
  @Input() singlePost!: {
    name: string;
    image: string;
    likes: number;
    isLiked: boolean;
  };

  toggleLike(singlepost: {
    name: string;
    image: string;
    likes: number;
    isLiked: boolean;
  }) {
    if (this.singlePost.isLiked) {
      this.singlePost.isLiked = false;
      this.singlePost.likes--;
    } else {
      this.singlePost.isLiked = true;
      this.singlePost.likes++;
    }
  }
}
