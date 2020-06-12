import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RamComponent } from "./rickandmorty/ram.component";
import { RamDetailComponent } from "./rickandmorty/ram-detail.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "", component: ShellComponent,
        children: [
            { path: "character", component: RamComponent },
            { path: "character/:name", component: RamDetailComponent },
            { path: "about", component: AboutComponent},
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
