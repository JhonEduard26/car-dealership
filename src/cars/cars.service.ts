import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto/cars.dto';

@Injectable()
export class CarsService {
  private readonly cars: Car[] = [
    {
      id: uuidv4(),
      brand: 'Toyota',
      model: 'Corolla',
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
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    this.cars.push({ id: uuidv4(), ...createCarDto });
    return this.cars.at(-1);
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findOne(id);
    const index = this.cars.indexOf(car);
    this.cars[index] = { ...car, ...updateCarDto, id };
    return this.cars[index];
  }

  delete(id: string) {
    const car = this.findOne(id);
    const index = this.cars.indexOf(car);
    return this.cars.splice(index, 1);
  }
}
