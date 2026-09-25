import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sekcja2-pipes',
  imports: [DatePipe],
  templateUrl: './sekcja2-pipes.html',
  styleUrl: './sekcja2-pipes.css',
})
export class Sekcja2Pipes {
  fieldDate = new Date();
}
