import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <navbar></navbar>
  <jumbotron></jumbotron>
  <div class="container">
	    <router-outlet></router-outlet>
	</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
