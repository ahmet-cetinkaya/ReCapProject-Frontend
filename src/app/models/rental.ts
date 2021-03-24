export interface Rental {
  id?: number;
  carId: number;
  customerId: number;
  rentStartDate: Date;
  rentEndDate: Date;
  returnDate?: Date;
}
