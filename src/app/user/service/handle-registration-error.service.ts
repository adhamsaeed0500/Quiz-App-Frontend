import { Injectable } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HandleRegistrationErrorService {

  constructor(private toastr:ToastrService) { }


  HandleRegistrationError(error:any){

    if(!error)
      this.toastr.error('Registration failed, please try again');

    const errorMap:{[key:string]:string}={
      DuplicateEmail: 'User already exists, please log in',
    DuplicateUserName: 'Username already exists, please try another name'
    };

    const errorKey = Object.keys(error)[0];
    const errorMessage = errorMap[errorKey] || 'Registration failed, please try again';
    this.toastr.error(errorMessage, 'Registration Failed', { timeOut: 3000 });
  }


  
}
