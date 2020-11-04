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

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
}

ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
}

scroll = (event): void => {
  var header = document.querySelector(".nav-container");
  header.classList.toggle("sticky", window.scrollY > 0)
};
}
