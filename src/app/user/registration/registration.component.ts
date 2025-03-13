import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { UserApiService } from '../service/userApi.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {


constructor(private user:UserApiService ,private toastr: ToastrService) { }
  
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
  if(this.registerForm.valid){
    this.user.register(this.registerForm.value).subscribe({
      next:res=>
      {
        this.registerForm.reset();
        console.log(res)
         this.toastr.success("user created successfully","",{timeOut: 3000,});


      },
      error:err=>
      {

        for (let [key, value] of Object.entries(err.error)) 
          {
          switch(key){
            case"DuplicateEmail":
            this.toastr.error("user already exists please login in","registration failed",{timeOut:3000})
            break;

            case"DuplicateUserName":
            this.toastr.error("username already exists please try another name","registration failed",{timeOut:3000})
            break;

            default:
              this.toastr.error("registration failed try agian")

          }
  
          }
               
      }
    })

  }
}
    
   



}
