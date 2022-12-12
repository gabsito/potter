import { Component } from '@angular/core';
import { Movie, Attributes } from 'src/app/interface/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies!: Movie[];

  constructor() {

    /* Leer desde el localStorage */
    let potterhead = JSON.parse(localStorage.getItem("potterhead")!);
      
    if(potterhead) {
      this.movies = potterhead as Movie[]
    }

  }

}
