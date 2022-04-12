import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-liste-perso',
  templateUrl: './liste-perso.component.html',
  styleUrls: ['./liste-perso.component.css']
})
export class ListePersoComponent implements OnInit {

listePerso: Array<Category>;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToDetailAnime(id: number) {
    //console.log(id);
    this.router.navigate(['/animes', id]);
  }

}
