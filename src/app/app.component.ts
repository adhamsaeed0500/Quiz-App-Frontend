import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { RegistrationComponent } from "./user/registration/registration.component";
import { UserComponent } from "./user/user.component";
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = "Quiz_App";
  
  constructor(private auth:AuthService , private router:Router) {}

  ngOnInit(): void {
    if(this.auth.isTokenExists())
       this.router.navigateByUrl("/dashboard"); 
  }

  

  

}
