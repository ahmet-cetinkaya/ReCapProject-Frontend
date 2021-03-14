import { CarImage } from './carImage';
import { ResponseModel } from './responseModel';

export interface CarImageResponseModel extends ResponseModel {
  data: CarImage[];
}
