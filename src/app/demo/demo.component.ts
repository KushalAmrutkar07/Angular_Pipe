import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{
  name = "MarveLLous Infosystems";
  today = new Date();
  value = 32.8989978; // 1= minimum digits before decimal point , y minimum fraction digits , z = max fraction digits that you want to display
  //z is bigger than y
  Institute = {
    "name" : "Marvellous",
    "location" : "pune"
  }
}
