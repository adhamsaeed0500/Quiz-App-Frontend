import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[RouterOutlet,NavbarComponent,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
