import { Component } from '@angular/core';
import { OtherComponent } from './other/other.component';

@Component({
  selector: 'app-root',
  templateUrl: `
    <h1>
      {{title}}
      <fa-other></fa-other>
    </h1>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
