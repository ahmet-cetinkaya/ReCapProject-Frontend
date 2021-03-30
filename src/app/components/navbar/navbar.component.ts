import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetail } from 'src/app/models/userDetail';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userDetail$: Observable<UserDetail | undefined> = this.authService
    .userDetail$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
