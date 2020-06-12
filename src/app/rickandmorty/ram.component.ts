import { Component, OnInit } from "@angular/core";
import { RamService } from "./ram.service";
import { BehaviorSubject } from "rxjs";


@Component({
    selector: "rs-characters",
    templateUrl: "./ram.component.html"
})
export class RamComponent implements OnInit {
    characters = [];
    idxstart = 0;

    constructor(private rs: RamService) {
        // this.pokemons$ = new BehaviorSubject([]);
     }

    ngOnInit(): void {
        this.rs.getCharacters().subscribe((response: any) => {
          this.characters = response.results
        //   response.results ambil data array object results
          console.log(this.characters)
        });
    }

    loadMore(){
        // this.idxstart+=20;
        // this.ps.getPokemons(this.idxstart).subscribe((response: any) => {
        //     this.pokemons.push( ... response.results);
        //     this.pokemons$.next(this.pokemons);
        //  });
    }
}