import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from '../service/userApi.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  
  constructor(private userAPi:UserApiService , private toastr:ToastrService ) {
   
    
  }


   ForgetPasswordForm=new FormGroup({
      Email:new FormControl('',[Validators.required,Validators.email]),
     },
     );



     submit(){
      const ForgetPassword = this.ForgetPasswordForm.controls.Email.value;

      if(this.ForgetPasswordForm.valid){
        this.userAPi.ForgetPassword(ForgetPassword).subscribe({
          next:res=> this.toastr.success(res , "" , {timeOut:2000}),
          error:err=> this.toastr.success(err , "" , {timeOut:2000})
        })

      }
     }
}
