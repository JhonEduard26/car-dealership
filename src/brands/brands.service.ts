import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuidv4(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    const index = this.brands.indexOf(brand);
    this.brands[index] = {
      ...brand,
      name: updateBrandDto.name.toLowerCase(),
      updatedAt: new Date().getTime(),
    };
    return this.brands[index];
  }

  remove(id: string) {
    const brand = this.findOne(id);
    const index = this.brands.indexOf(brand);
    return this.brands.splice(index, 1);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands.push(...brands);
  }
}
