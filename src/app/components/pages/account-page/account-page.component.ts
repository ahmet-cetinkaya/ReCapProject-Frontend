import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Findeks } from 'src/app/models/findeks';
import { UserDetail } from 'src/app/models/userDetail';
import { UserDetailUpdateModel } from 'src/app/models/userDetailUpdateModel';
import { AuthService } from 'src/app/services/auth.service';
import { FindeksService } from 'src/app/services/findeks.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  accountForm!: FormGroup;
  userDetail$: Observable<UserDetail | undefined> = this.authService
    .userDetail$;
  findeks!: Findeks;
  currentPasswordHidden: boolean = true;
  newPasswordHidden: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private findeksService: FindeksService,
    private toastrService: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserDetailsAndFindeksThenCreateAccountForm();
  }

  getUserDetailsAndFindeksThenCreateAccountForm() {
    this.userDetail$.pipe(first()).subscribe((userDetail) => {
      if (!userDetail) return;

      this.findeksService
        .getByCustomerId(userDetail?.customerId)
        .subscribe((response) => {
          this.findeks = response.data;
          this.accountForm = this.formBuilder.group({
            firstName: [userDetail?.firstName, Validators.required],
            lastName: [userDetail?.lastName, Validators.required],
            companyName: [userDetail?.companyName, Validators.required],
            nationalIdentity: [this.findeks.nationalIdentity],
            currentPassword: ['', Validators.required],
            newPassword: [''],
          });
        });
    });
  }

  updateAccount() {
    if (!this.accountForm.valid) return;

    this.userDetail$.pipe(first()).subscribe((userDetail) => {
      let userDetailUpdateModel: UserDetailUpdateModel = {
        ...userDetail,
        ...this.accountForm.value,
      };

      this.userService
        .updateUserDetails(userDetailUpdateModel)
        .subscribe((response) => {
          if (response.success) {
            if (userDetail) {
              var newUserDetail: UserDetail = {
                ...userDetail,
                firstName: userDetailUpdateModel.firstName,
                lastName: userDetailUpdateModel.lastName,
                companyName: userDetailUpdateModel.companyName,
              };
              this.authService.setUserDetail(newUserDetail);
            }

            this.toastrService.success(response.message);
            this.router.navigate(['']);
          }
        });
    });
  }

  toggleCurrentPasswordHidden() {
    this.currentPasswordHidden = !this.currentPasswordHidden;
  }

  toggleNewPasswordHidden() {
    this.newPasswordHidden = !this.newPasswordHidden;
  }

  isCurrentPasswordHidden(): string {
    return this.currentPasswordHidden ? 'password' : 'text';
  }

  isNewPasswordHidden(): string {
    return this.newPasswordHidden ? 'password' : 'text';
  }

  isCurrentPasswordHiddenIcon(): string {
    return this.currentPasswordHidden ? 'fa-eye-slash' : 'fa-eye text-primary';
  }

  isNewPasswordHiddenIcon(): string {
    return this.newPasswordHidden ? 'fa-eye-slash' : 'fa-eye text-primary';
  }
}
