import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interpret, interpreterCore } from '@ts-interpreter/interpreter-core';

@Component({
  standalone: true,
  selector: 'ts-interpreter-root',
  imports: [CommonModule],
  template: `
    <textarea (input)="handleInput($event)" cols="30" rows="10"></textarea>
    <button *ngIf="inputText" (click)="handleSubmit()">Submit</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  interpreterCore = interpreterCore();

  inputText = '';

  handleInput(e: Event) {
    this.inputText = (e.target as HTMLTextAreaElement).value;
  }

  handleSubmit() {
    interpret(this.inputText);
  }
}
