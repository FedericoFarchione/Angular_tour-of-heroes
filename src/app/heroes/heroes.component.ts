import { Component, OnInit, Input} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    hero: Hero = {
      id: 1,
      name: 'Mr.Eroe'
    };

    heroes: Hero[];
    selectedHero: Hero;


    //in questo spazio dichiariamo le variabili tipo "nome : String = ciao" si legano in auto al this
    //OnInit va implementato sulla classe se deve essere usato
    constructor(private heroService: HeroService) { }

//buisness logic si possono scrive le funzione all'interno se mi voglio riferire ad una var scritta
//sopra il constructor devo usare this
      ngOnInit() {
        this.getHeroes();
      }
  //
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

      getHeroes(): void {
        this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
      }
}
