import { Component, inject, signal } from '@angular/core';
import { TestService } from './test.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sekcja2-service',
  imports: [FormsModule],
  templateUrl: './sekcja2-service.html',
  styleUrl: './sekcja2-service.css',
})
export class Sekcja2Service {
  newTaskId = signal('');

  // są 2 metody na robienie DI z servisem
  // 1 - funkja inject
  taskServiceA = inject(TestService);

  // 2 - argument w konstruktorze
  /*
  UWAGA - konstrukcja 'public taskServiceB: TestService' to uproszczenie z TypeScript 
  i dokładnie oznacza ->

  public taskServiceB!: TestService;           // prywatne pole klasy
  constructor(taskServiceB: TestService) {
    this.taskServiceB = taskServiceB;           // inicjalizacja pola klasy
  }

  więc dodanie modyfikatora dostepu 'public' lub 'private' do argumentu w konstruktorze sprawia, że pole jest automatycznie tworzone i inicjowane w klasie
   */
  constructor(public taskServiceB: TestService) {}

  handleSubmitNewTaskA() {
    this.taskServiceA.addTask({ id: this.newTaskId() });
  }

  handleSubmitNewTaskB() {
    this.taskServiceB.addTask({ id: this.newTaskId() });
  }
}
