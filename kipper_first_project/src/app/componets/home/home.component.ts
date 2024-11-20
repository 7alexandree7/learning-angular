import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  nome = 'unfast'; 
  myButton = 'First Button'
  idButton = Math.random(); 

  handleClick(event: any) {
    console.log('clicou')
    console.log(event)
  }

  handleSubmit(event: any) {
    event.preventDefault()
    console.log('clicou')
    console.log(event)
  }

}
