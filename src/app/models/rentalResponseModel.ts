import { Rental } from './rental';
import { ResponseModel } from './responseModel';

export interface RentalResponseModel extends ResponseModel {
  data: Rental[];
}
