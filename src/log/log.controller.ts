import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LogService } from './log.service';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';

/***************************
 * Todo:
 * * _Implement the controller for logs._
 **************************/
@Controller('logs')
export class LogController {
  constructor(private readonly logsService: LogService) {}

  @Post()
  create(@Body() createLogDto: CreateLogDto) {
    return this.logsService.create(createLogDto);
  }

  @Get()
  findAll() {
    return this.logsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogDto: UpdateLogDto) {
    return this.logsService.update(+id, updateLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logsService.remove(+id);
  }
}
