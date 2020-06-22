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
        // this.characters$ = new BehaviorSubject([]);
     }

    ngOnInit(): void {
        this.rs.getCharacters().subscribe((response: any) => {
          this.characters = response.results
          console.log(this.characters)
        });
    }

    loadMore(){
        // this.idxstart+=20;
        // this.ps.getCharacters(this.idxstart).subscribe((response: any) => {
        //     this.characters.push( ... response.results);
        //     this.characters$.next(this.characters);
        //  });
    }
}