import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})

export class ContactanosComponent {
  miFormulario: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    }); 
  }

  mySubmit() {
      console.log("1");
      // Asignación de valores
      // name
      const campo = document.getElementById('name') as HTMLInputElement;
      const valorname = campo.value;
      console.log('Valor del campo: ' + valorname);
      // email
      const campo2 = document.getElementById('email') as HTMLInputElement;
      const valoremail = campo2.value;
      console.log('Valor del campo: ' + valoremail);
      // message
      const campo3 = document.getElementById('message') as HTMLInputElement;
      const valormessage = campo3.value;
      console.log('Valor del campo: ' + valormessage);
    
      // Expresión regular para verificar el formato del correo electrónico
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
      if (valorname !== '' && valormessage !== '') {
        if (emailRegex.test(valoremail)) {
          console.log(valorname);
          console.log(valoremail);
          console.log(valormessage);
    
          console.log("2");
          this.router.navigate(['/confirmacion']);
        } else {
          alert("El campo de correo electrónico debe tener un formato válido (ejemplo@dominio.com).");
        }
      } else {
        alert("Todos los campos son obligatorios. Por favor, llene todos los campos.");
      }
    }
    
}