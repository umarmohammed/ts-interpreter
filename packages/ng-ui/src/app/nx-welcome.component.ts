import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interpreterCore } from '@ts-interpreter/interpreter-core';

@Component({
  selector: 'ts-interpreter-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      {{ interpreterCore }}
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  @Input() interpreterCore = '';
}
