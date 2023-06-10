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
    <pre>{{ outputTokens }} <pre>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  interpreterCore = interpreterCore();

  inputText = '';
  outputTokens = '';

  handleInput(e: Event) {
    this.inputText = (e.target as HTMLTextAreaElement).value;
  }

  handleSubmit() {
    this.outputTokens = JSON.stringify(interpret(this.inputText), null, 2);
  }
}
