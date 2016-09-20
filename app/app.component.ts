import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  showHeading = true;
  heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado', 'That\'s better!'];
  toggleHeading() {
    this.showHeading = !this.showHeading;
  }
}
