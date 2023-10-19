import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-zonausuarios',
  templateUrl: './zonausuarios.component.html',
  styleUrls: ['./zonausuarios.component.css']
}) 

export class ZonausuariosComponent {
  miFormulario: FormGroup;


  constructor(private router: Router, private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      day: ['' , Validators.required],
      hour: ['', Validators.required]
    }); 
  }

  onSubmit2() {
    //Asignacion de valores
    //dia
    const campo = document.getElementById('dia') as HTMLInputElement;
    const valordia = campo.value;
    console.log('Valor del campo: ' + valordia);
    //Hora
    const campo2 = document.getElementById('hora') as HTMLInputElement;
    const valorhora = campo2.value;
    console.log('Valor del campo: ' + valorhora);

  if (valordia != '' && valorhora != '') {
    console.log(valordia);
    console.log(valorhora);
    // Continue with form submission or other actions
    this.router.navigate(['/pedidoconfirmado']);
  } else {
    alert("Todos los campos son obligatorios. Por favor, llene todos los campos.");
  }
}

}


