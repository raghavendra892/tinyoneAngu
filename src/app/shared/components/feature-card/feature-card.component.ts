import { Component, Input, OnInit } from '@angular/core';
import { IfeatureCard } from '../../model/data';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {
@Input() featurecard! : IfeatureCard
  constructor() { }

  ngOnInit(): void {
  }

}
