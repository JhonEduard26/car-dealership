import { Brand } from '../../brands/entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuidv4(),
    name: 'Audi',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'BMW',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'Mercedes',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'Volkswagen',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'Volvo',
    createdAt: new Date().getTime(),
  },
];
