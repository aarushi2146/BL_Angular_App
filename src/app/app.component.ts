import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";
  logoUrl = 'assets/BridgeLabzlogo.png';
  url = "https://www.bridgelabz.com";
  userName: string = "";

  onClick($event){
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }
}
