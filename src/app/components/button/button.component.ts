// We are also going to bring in Input from core bc below we are using 
// component input
// Output to output an event emitter
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // text is the name of the variable/what we want to call it
  // The way we grab onto what is passed in the the component in parent html file
  // In the latest version you need to declare your variables in the 
  // constuctor otherwise it will throw an error or you can use a ! after
  // the variables
  @Input() text!: string;
  @Input() color!: string;
  // btnClick is the name of the event we are going to be emitting
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  // We don't want our onClick method or toggle functionality in the class
  // bc we want this button to be reusable and every button has a different
  // purpose
  // So we are going to bring in an event emitter and outputter, to output
  // the event
  onClick() {
    // call btnClick then we want to call emit, it's not going to do 
    // anything because it's just emitting
    this.btnClick.emit();
  }
}
