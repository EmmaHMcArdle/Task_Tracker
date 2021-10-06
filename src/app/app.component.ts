// TypeScript File
// This is the basic stucture for all components

// Import a component from core
import { Component } from '@angular/core';

// Component Declaration
@Component({
  // Three items declared in this object/component declaration

  // The selector is whatever the html tag that you are going to use to embed your component
  // Since this is the root component, it's getting embedded in index.html
  // All the components we'll be creating, will be embedded into the app.component.html
  selector: 'app-root',
  // The templateUrl is just the html file that you're using
  templateUrl: './app.component.html',
  // You can have more than one stylesheet
  styleUrls: ['./app.component.css']
})

// Then you have your classes where you put any properties of the component
// in this case there's a title and any methods - custom methods, life cycle
// methods - it's kinda like React class-based components
export class AppComponent {
  // here we have a title just called angular crash
  // this isn't using typescript by default
  // but I would highly recommend you add types to your properties & functions
  
}
