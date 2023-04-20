import { Component, OnInit } from '@angular/core';
import { IfeatureCard } from '../../model/data';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  featureCardsArray : Array<IfeatureCard> = [
    {
      icon : '<i class="fa-brands fa-aws fa-2x"></i>',
      title : 'Fully Responsive',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-regular fa-lemon fa-2x"></i>',
      title : 'Fully Layered PSD',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-regular fa-folder fa-2x"></i>',
      title : 'Font Awesome Icon',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-solid fa-code fa-2x"></i>',
      title : 'HTML3 & CSS3',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-regular fa-envelope fa-2x"></i>',
      title : 'Email Template',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-regular fa-bookmark fa-2x"></i>',
      title : 'Free to download',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    }
    

  ]

 
  constructor() { }

  ngOnInit(): void {
  }

}
