import { Component } from "@angular/core";
import { Sekcja2 } from "./sekcja-2-podstawy/sekcja2";
import { Sekcja6 } from "./sekcja-6-komponenty-i-dyrektywy/sekcja6";
@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  imports: [
    Sekcja2, //
    Sekcja6,
  ],
})
export class App {}
