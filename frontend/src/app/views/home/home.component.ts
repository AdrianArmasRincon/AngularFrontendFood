import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slideIndex = 1;
  slides: string[] = ["",
                      "../../../assets/img/Papasarrugadas.jpg", 
                      "../../../assets/img/potajeberros.jpg", 
                      "../../../assets/img/rancho.jpg"
                      ];

  ngOnInit() {
    this.showSlides(this.slideIndex);//Muestra el slide actual
  }

  currentSlide(n: number) {
    this.showSlides(n);
  }

  showSlides(n: number) {
    console.log(n);
    if (n == 1){
      this.slideIndex = 1;
      this.slides[1];
    }
    if (n == 2){
      this.slideIndex = 2;
      this.slides[2];
    }

    if (n == 3){
      this.slideIndex = 3;
      this.slides[3];
    }
  }
}