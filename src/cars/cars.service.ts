import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from 'src/interfaces/car.interface';
import { CreateCarDto } from './dto/cars.dto';

@Injectable()
export class CarsService {
  private readonly cars: Car[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'BMW',
      model: 'X5',
    },
    {
      id: 3,
      brand: 'Mercedes',
      model: 'C-Class',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  create(body: CreateCarDto) {
    this.cars.push(body);
    return this.cars.at(-1);
  }

  update(id: number, body: any) {
    const car = this.findOne(id);
    const index = this.cars.indexOf(car);
    this.cars[index] = { ...car, ...body };
    return this.cars[index];
  }

  delete(id: number) {
    const car = this.findOne(id);
    const index = this.cars.indexOf(car);
    this.cars.splice(index, 1);
    return this.cars[index];
  }
}
