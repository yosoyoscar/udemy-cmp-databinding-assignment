import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() newNumber = new EventEmitter<number>();

  cont: number = 0;
  myInterval;

  constructor() { }

  ngOnInit() {
  }

  onStartClick(){
    this.myInterval = setInterval(
      () => {
        this.cont++; 
        this.newNumber.emit(this.cont);
      },
      500
    );
  }

  onStopClick(){
    clearInterval(this.myInterval);
    this.myInterval = null;
  }

}
