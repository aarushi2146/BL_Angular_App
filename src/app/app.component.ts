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
  nameError: string ="";

  onClick($event){
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }
  onInput($event){
    console.log("Change event Occured!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError ="";
      return;
    }
    this.nameError ="Name is incorrect!";
  }
}