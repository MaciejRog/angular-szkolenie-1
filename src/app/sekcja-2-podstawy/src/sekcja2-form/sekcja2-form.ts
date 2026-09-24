import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sekcja2-form',
  imports: [FormsModule],
  templateUrl: './sekcja2-form.html',
  styleUrl: './sekcja2-form.css',
})
export class Sekcja2Form {
  fieldTextInput = signal('');
  fieldTextTextarea = signal('');
  fieldDate = signal('');
  fieldNumber = signal(0);

  fieldCheck = signal(true);
  fieldRadio = signal('1');

  fieldFile = signal<File | null>(null);
  fieldFileUrl = computed(() => {
    let url = '';
    const fieldFile = this.fieldFile();
    if (fieldFile) {
      url = URL.createObjectURL(fieldFile);
    }
    return url;
  });

  onChangeFieldFile(e: Event) {
    const eventTarget = e.target as HTMLInputElement;
    if (eventTarget.files && eventTarget.files.length > 0) {
      this.fieldFile.set(eventTarget.files[0]);
    }
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.warn(`SUBMIT - submit`);
  }

  onNgSubmit() {
    console.warn(`SUBMIT - NgSubmit`);
  }
}
