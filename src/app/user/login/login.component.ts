import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserApiService } from '../service/userApi.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private login:UserApiService , private router:Router,private toastr:ToastrService) { }



  loginForm=new FormGroup({
    Email:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',[Validators.required,Validators.minLength(6)]),
   },
   );
  
   onsubmit(){

    if(this.loginForm.valid){
      this.login.login(this.loginForm.value).subscribe({
        next:res=>{
          localStorage.setItem("token",res.token);
          this.router.navigateByUrl("/dashboard");
        },
        error:err=>{
          if(err.status = 400){
            this.toastr.error("Invalid email or password","",{timeOut:3000})
          }else(err.status == 500)
          this.toastr.error("there is problem please try later","",{timeOut:3000})
        }
      });
      


    }



   }

 




}
