import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  router = inject(Router);

  logout() {
    
    localStorage.removeItem('userApp');
    this.router.navigateByUrl("");

  }
}
