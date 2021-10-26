import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase1';
  usuarios: Array<{ id: number, username: string, edad: number }> = [
    {
      id: 1,
      username: 'leomessi',
      edad: 34
    },
    {
      id: 2,
      username: 'bobesponja',
      edad: 15
    },
    {
      id: 3,
      username: 'jon',
      edad: 19
    }
  ];
  empleadoBuscar: string = '';
  contador: number = 0;
  handlerInput(e: any) {
    console.log(e.target);
    this.empleadoBuscar = e.target.value;
    console.log(this.empleadoBuscar);
  }
  submitButton() {
    this.contador++;
    console.log('aprete el boton');
  }
}
