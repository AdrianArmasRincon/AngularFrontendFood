import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})

export class RegisterComponent {
  
  miFormulario: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pswd: ['', Validators.required]     
    }); 
  }


mySubmit(){
  console.log("1");
  // Asignación de valores
  // name
  const campo = document.getElementById('username') as HTMLInputElement;
  const valorname = campo.value;
  console.log('Valor del campo: ' + valorname);
  // email
  const campo2 = document.getElementById('email') as HTMLInputElement;
  const valoremail = campo2.value;
  console.log('Valor del campo: ' + valoremail);
  // password
  const campo3 = document.getElementById('password') as HTMLInputElement;
  const valorpswd = campo3.value;
  console.log('Valor del campo: ' + valorpswd);

  // Expresión regular para verificar el formato del correo electrónico
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (valorname !== '' && valorpswd !== '') {
    if (emailRegex.test(valoremail)) {
      console.log(valorname);
      console.log(valoremail);
      console.log(valorpswd);

      console.log("2");
      this.router.navigate(['/zonausuarios']);
    } else {
      alert("El campo de correo electrónico debe tener un formato válido (ejemplo@dominio.com).");
    }
  } else {
    alert("Todos los campos son obligatorios. Por favor, llene todos los campos.");
  }
}

}

