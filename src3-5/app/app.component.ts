import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public name:string = 'sachin';
  public fun():any {
    console.log('Marvellous Infosystem');

  }
}
