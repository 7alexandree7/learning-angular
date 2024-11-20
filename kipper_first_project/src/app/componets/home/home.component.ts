import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioSerice = inject(EnviaFormularioService)
  nome = 'unfast'; 
  myButton = 'First Button'
  idButton = Math.random(); 
  deveMostrarTitulo = false;
  listItems = ['leite condensado', 'leite em po', 'paçoca', 'açai', 'agua']

  @Input() minhaPropsDefora!: string;
  @Output() emitindoValorName = new EventEmitter<string>();


  handleClick(event: any) {
    console.log('clicou')
    console.log(event)
  }

  handleSubmit(event: any) {
    this.emitindoValorName.emit(this.minhaPropsDefora)
    event.preventDefault()
    this.enviaFormularioSerice.enviaInfoPraBackEnd('enviando informação')
  }

}
