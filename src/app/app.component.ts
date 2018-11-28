import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  evenComponents: number[] = [];
  oddComponents: number[] = [];
  
  onNewNumber(newNumber : number){
    if(newNumber % 2){
      this.oddComponents.push(newNumber);
    }
    else{
      this.evenComponents.push(newNumber);
    }
  }
}
