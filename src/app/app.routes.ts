import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { mainComponent } from './main/main.component';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import { ExamFormComponent } from './Exam/components/exam-form/exam-form.component';

export const routes: Routes = [
    {path:'', redirectTo:"signin",pathMatch:'full'},
    {path:'main',component:mainComponent},
    {path:'Exam', component:ExamFormComponent},
    {path:'',component:UserComponent,
        children:[
            {path:'signup',component:RegistrationComponent},
            {path:'signin',component:LoginComponent},
            {path:"ForgetPassword",component:ForgetPasswordComponent}
        ]
    },







];
