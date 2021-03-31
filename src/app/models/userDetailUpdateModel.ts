export interface UserDetailUpdateModel {
  id: number;
  customerId: number;
  firstName: string;
  lastName: string;
  companyName: string;
  nationalIdentity: string;
  currentPassword: string;
  newPassword: string;
}
