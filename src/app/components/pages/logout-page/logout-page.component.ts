import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss'],
})
export class LogoutPageComponent implements OnInit {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.logout();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
