import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserApiService } from '../service/userApi.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:UserApiService , private router:Router,private toastr:ToastrService,
    private auth :AuthService) { }


  ngOnInit(): void {
    // if(this.auth.isLogged())
    //   this.router.navigateByUrl("/dashboard"); 
  }

  loginForm=new FormGroup({
    Email:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',[Validators.required,Validators.minLength(6)]),
   },
   );
  
   onsubmit(){
    const loginValue = this.loginForm.value;
    if(this.loginForm.valid){
      this.login.login(loginValue).subscribe({
        next:res=>{
          this.auth.isloggedIn$.next(true);
          this.auth.saveToken(res.token);
          console.log(this.auth.getClaims());
          this.auth.saveTokenExpirationDate(res.expiration);
          this.router.navigateByUrl("/dashboard");
        },
        error:err=>{
          if(err.status = 400)
              this.toastr.error("Invalid email or password","",{timeOut:3000})  
          else         
              this.toastr.error("login failed please try later","",{timeOut:3000})
    }});
    }
   }

 




}
