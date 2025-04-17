import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 

  isMobileMenuActive = false;
  isDropdownActive = false;

  constructor(private elementRef: ElementRef) {}

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
