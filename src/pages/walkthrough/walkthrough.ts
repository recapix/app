import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

 import { LoginPage, SignupPage } from '../';

@Component({
  selector: 'walkthrough-page',
  templateUrl: 'walkthrough.html'
})
export class WalkthroughPage {

  lastSlide = false;

  @ViewChild('slider') slider: Slides;

  constructor(public nav: NavController) {

  }

  skipIntro() {
    // You can skip to main app
    // this.nav.setRoot(TabsNavigationPage);

    // Or you can skip to last slide (login/signup slide)
    this.lastSlide = true;
    this.slider.slideTo(this.slider.length());
  }

  onSlideChanged() {
    // If it's the last slide, then hide the 'Skip' button on the header
    this.lastSlide = this.slider.isEnd();
  }

  goToLogin() {
    debugger;
    console.log("Navigate to LoginPage");
    this.nav.push(LoginPage);
  }

  goToSignup() {
    debugger;
    console.log("Navigate to SignupPage");
    this.nav.push(SignupPage);
  }
}
