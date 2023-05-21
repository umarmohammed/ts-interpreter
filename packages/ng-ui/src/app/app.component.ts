import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { interpreterCore } from '@ts-interpreter/interpreter-core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'ts-interpreter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-ui';

  interpreterCore = interpreterCore();
}
