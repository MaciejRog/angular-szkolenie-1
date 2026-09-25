import { Injectable } from '@angular/core';

type TTask = {
  id: string;
};

// wymagane aby Angular wiedział, że może traktować tą klasę jako coś do wstrzykiwania z DI
// instancje będą traktowane jako singleton
@Injectable({ providedIn: 'root' })
export class TestService {
  private tasks: TTask[] = [
    {
      id: 'init-1',
    },
  ];

  constructor() {
    const storrageTasks = localStorage.getItem('section-2-taska');

    if (storrageTasks) {
      this.tasks = JSON.parse(storrageTasks);
    }
  }

  getTasks() {
    return this.tasks;
  }

  addTask(newTask: TTask) {
    this.tasks.push(newTask);
    this.updateStorrage();
  }

  removeTash(taskId: string) {
    this.tasks = this.tasks.filter((taskEl) => (taskEl.id === taskId ? false : true));
    this.updateStorrage();
  }

  private updateStorrage() {
    localStorage.setItem('section-2-taska', JSON.stringify(this.tasks));
  }
}
