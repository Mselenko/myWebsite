import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-app';
  
  public isNavbarShowing: boolean = false;

  /**
   * navbarButtonClick
   */
  public navbarButtonClick() {
    this.isNavbarShowing = !this.isNavbarShowing;
  }
}
