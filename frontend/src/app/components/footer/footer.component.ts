import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

  constructor(private router: Router){}

  isDarkMode: boolean = false;

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      // Cambiar a modo oscuro
      document.body.style.backgroundColor = '#2B2E4A'; 
      
      document.querySelectorAll('h1').forEach((h1) => {
        h1.style.color = '#FC8C23'; 
      });      
      document.body.style.backgroundColor = '#2B2E4A'; 
      document.querySelectorAll('h2').forEach((h2) => {
        h2.style.color = '#FC8C23'; 
      });
      document.querySelectorAll('p').forEach((p) => {
        p.style.color = '#D9D9D9'; // color p
      });
      /*Button*/
      document.querySelectorAll('button').forEach((button) => {
        button.style.color = '#D9D9D9';
      });
      /*button-color text*/
      document.querySelectorAll('button').forEach((button) => {
        button.style.backgroundColor = '#D9D9D9';
      });
      document.querySelectorAll('.button').forEach((button) => {
        (button as HTMLElement).style.backgroundColor = '#D9D9D9';
      });
      /**/ 
      document.querySelectorAll('.boton-texto').forEach((button) => {
        (button as HTMLElement).style.color = '#FC8C23';
      });
      /**/ 
      document.querySelectorAll('.get-it').forEach((button) => {
        (button as HTMLElement).style.color = '#FC8C23';
      });
        
      
    } else {
      // Cambiar a modo claro
      document.body.style.backgroundColor = '#f5f5f5'; 
      document.querySelectorAll('h1').forEach((h1) => {
        h1.style.color = '#B05500'; 
      });
      document.body.style.backgroundColor = '#f5f5f5'; 
      document.querySelectorAll('h2').forEach((h2) => {
        h2.style.color = '#B05500'; 
      });
      document.querySelectorAll('p').forEach((p) => {
        p.style.color = '#000000'; // color p
      });
      /*Button text*/
      document.querySelectorAll('button').forEach((p) => {
        p.style.background = '#2B2E4A';
      });
      /*button-color*/
      document.querySelectorAll('button').forEach((button) => {
        button.style.backgroundColor = '#2B2E4A';
      });   
      document.querySelectorAll('.button').forEach((button) => {
        (button as HTMLElement).style.backgroundColor = '#2B2E4A';
      });
      /**/   
      document.querySelectorAll('.boton-texto').forEach((button) => {
        (button as HTMLElement).style.color = '#D9D9D9';
      });
      /**/ 
      document.querySelectorAll('.get-it').forEach((button) => {
        (button as HTMLElement).style.color = '#D9D9D9';
      });
      document.querySelectorAll('.color-button').forEach((button) => {
        (button as HTMLElement).style.backgroundColor = '#FC8C23';
      });
      
      
    }
  }

  /*
  gotohome(){
    this.router.navigateByUrl('./home/home.component');
  }
  */
}