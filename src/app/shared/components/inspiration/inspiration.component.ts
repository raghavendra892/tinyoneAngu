import { Component, OnInit } from '@angular/core';
import { Iicons } from '../../model/data';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {

  iconListArray : Array<Iicons> = [
    {
      link : "javascript:;",
      icon : '<i class="fa-brands fa-apple fa-3x"></i>'
    },
    {
      link : "javascript:;",
      icon : '<i class="fa-solid fa-mobile fa-3x"></i>'
    },
    {
      link : "javascript:;",
      icon : '<i class="fa-brands fa-windows fa-3x"></i>'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

