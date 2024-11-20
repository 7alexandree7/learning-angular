import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  
  constructor() { }

  enviaInfoPraBackEnd(info: any) {
    console.log('clicou')
  }


}
