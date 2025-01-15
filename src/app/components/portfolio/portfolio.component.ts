import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { CommonModule } from '@angular/common';

interface card{
  img: string;
  alt: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [StarComponent,CommonModule],
  templateUrl: './portfolio.component.html',
  styles: ``
})
export class PortfolioComponent {
  cards = [
    { img: 'imgs/poert1.png', alt: 'Portfolio Sample 1' },
    { img: 'imgs/port2.png', alt: 'Portfolio Sample 2' },
    { img: 'imgs/port3.png', alt: 'Portfolio Sample 3' },
    { img: 'imgs/poert1.png', alt: 'Portfolio Sample 1' },
    { img: 'imgs/port2.png', alt: 'Portfolio Sample 2' },
    { img: 'imgs/port3.png', alt: 'Portfolio Sample 3' },
    { img: 'imgs/poert1.png', alt: 'Portfolio Sample 1' },
    { img: 'imgs/port2.png', alt: 'Portfolio Sample 2' },
    { img: 'imgs/port3.png', alt: 'Portfolio Sample 3' },
    { img: 'imgs/poert1.png', alt: 'Portfolio Sample 1' },
    { img: 'imgs/port2.png', alt: 'Portfolio Sample 2' },
    { img: 'imgs/port3.png', alt: 'Portfolio Sample 3' }
  ];


  isLightBox: boolean = false;


  showLightBox():void{
    this.isLightBox = ! this.isLightBox
  }



  currentCard!:card

  showCurrentCard(card:card):void{
    console.log(card);
    this.currentCard = card
  }
}
