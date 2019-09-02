import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  list() {
    return this.photoService.findAll();
  }
}
