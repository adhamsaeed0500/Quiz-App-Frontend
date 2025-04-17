import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { UserApiService } from '../service/userApi.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { HandleRegistrationErrorService } from '../service/handle-registration-error.service';



@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {


constructor(private user:UserApiService ,private toastr: ToastrService , private router:Router,
  private handleError:HandleRegistrationErrorService) { }
  ngOnInit(): void {
    // if(this.auth.isLogged())
    //   this.router.navigateByUrl("/dashboard"); 
  }
  
  passwordMatch(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password= control.get("Password");
    const confirmPassword= control.get("confirmPassword");
  
    if(password.value == confirmPassword.value){
      return null;
    }
    return { passwordMismatch: true };
  };
}

 
registerForm=new FormGroup({
  userName:new FormControl('',[Validators.required]),
  Email:new FormControl('',[Validators.required,Validators.email]),
  Password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6)])

 },
   { validators: this.passwordMatch() }
 );


onSubmit(){
  if(!this.registerForm.valid)
    this.toastr.error("invalid form please try agian","",{timeOut: 3000,});

  const userData = this.registerForm.value;
  if(this.registerForm.valid){
    this.user.register(userData).subscribe({
      next:res=>
      {
        this.registerForm.reset();       
         this.toastr.success("user created successfully","",{timeOut: 3000,});
         this.router.navigateByUrl("/dashboard");
      },
      error:err=>
      {
        const error = err.error;
        this.handleError.HandleRegistrationError(error);       
      }
    })

  }
}
    
   



}
