import { Car } from '../../cars/interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuidv4(),
    brand: 'Audi',
    model: 'A4',
  },
  {
    id: uuidv4(),
    brand: 'BMW',
    model: 'X5',
  },
  {
    id: uuidv4(),
    brand: 'Mercedes',
    model: 'C-Class',
  },
  {
    id: uuidv4(),
    brand: 'Volkswagen',
    model: 'Golf',
  },
  {
    id: uuidv4(),
    brand: 'Volvo',
    model: 'XC90',
  },
];
