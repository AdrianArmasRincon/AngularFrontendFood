import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-antiguasreservas',
  templateUrl: './antiguasreservas.component.html',
  styleUrls: ['./antiguasreservas.component.css']
})
export class AntiguasreservasComponent implements OnInit {
  fecha: string = ''; // Declarar fecha como un string vacío
  customTxt: string = "Papas arrugadas x1<br>Tortilla con cebolla x1<br><br>Total ------------------------ 15,90 euros";

  onSearchClick() {
    const inputText = document.getElementById("inputText") as HTMLInputElement; // Obtener el valor del input
    if (inputText && inputText.value) { // Verificar si hay un valor en el input
      const newDiv = document.createElement('div');
      
      // Aplicar el estilo al texto "Fecha"
      newDiv.innerHTML = `<br><br><br><span style="font-family: 'Lexend Deca', sans-serif; font-size: 130%; color: #B05500;">
      ${inputText.value}<br><br></span> ${this.customTxt}`;
      
      // Puedes usar Angular's Renderer2 o ElementRef para manipular el DOM, pero para simplicidad, usaremos JavaScript vanilla.
      const resultDiv = document.getElementById('resultDiv');
      if (resultDiv) {
        resultDiv.appendChild(newDiv);
      }
    } else {
      alert('Por favor, ingrese un valor en el campo de texto.');
    }
  }
  
  

  ngOnInit(): void {
    // Puedes inicializar cualquier cosa necesaria en el método ngOnInit si es necesario.
  }
}