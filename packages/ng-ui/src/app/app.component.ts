import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interpret, interpreterCore } from '@ts-interpreter/interpreter-core';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  selector: 'ts-interpreter-root',
  imports: [CommonModule],
  template: `<div>
    <textarea (keyup)="handleKeyUp($event)" cols="30" rows="10"></textarea>
    <button
      *ngIf="inputText$ | async as inputText"
      (click)="handleSubmit(inputText)"
    >
      submit
    </button>
  </div>`,
})
export class AppComponent {
  interpreterCore = interpreterCore();

  inputText$ = new BehaviorSubject('');

  handleKeyUp(e: KeyboardEvent) {
    this.inputText$.next((e.target as HTMLTextAreaElement).value);
  }

  handleSubmit(inputText: string) {
    interpret(inputText);
  }
}
