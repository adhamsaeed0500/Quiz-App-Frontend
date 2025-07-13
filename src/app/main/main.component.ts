import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[RouterOutlet,NavbarComponent,RouterModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class mainComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }

}
