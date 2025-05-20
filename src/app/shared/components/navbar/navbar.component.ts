import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 

  isMobileMenuActive = false;
  isDropdownActive = false;
  navBarIsLogged:boolean= false;
  navBarIsSubmitted:boolean= false;
  claims:any;
  

  constructor(private elementRef: ElementRef , private auth:AuthService  ,private router:Router) {}
  

  ngOnInit() {
    this.auth.isloggedIn$.subscribe((islogged) => this.navBarIsLogged= islogged);
    this.auth.isSubmitedIn$.subscribe((isSubmitted) => this.navBarIsSubmitted= isSubmitted);
    this.claims = this.auth.getClaims();
    
  }

  


  RemoveToken(){
    this.auth.removeToken();
    this.auth.removeTokenExpirationDate();
    this.auth.isloggedIn$.next(false);
    this.router.navigateByUrl("/signin");
  }




  toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  toggleDropdown(event: Event): void {
    event.preventDefault();
    if (window.innerWidth <= 992) {
      this.isDropdownActive = !this.isDropdownActive;
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMobileMenuActive = false;
      this.isDropdownActive = false;
    }
  }

}
