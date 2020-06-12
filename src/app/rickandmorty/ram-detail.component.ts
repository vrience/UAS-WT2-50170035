import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RamService } from "./ram.service";

@Component({
    selector: "ns-details",
    templateUrl: "./ram-detail.component.html"
})
export class RamDetailComponent implements OnInit { 
    name;
    character;

    constructor(private route: ActivatedRoute, private rs: RamService) { }

    ngOnInit(): void {
        this.name = this.route.snapshot.params.name;
        this.rs.getCharacter(this.name).subscribe(
            response => {
                this.character = response;
            }
        )
    }
}
