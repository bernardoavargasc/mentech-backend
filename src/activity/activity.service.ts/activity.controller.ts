import { Controller, Post, Body, Get, Patch, UseGuards, Request, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ActivityService } from './activity.service'; // Asegúrate de tener este servicio

@Controller('activities')
@UseGuards(AuthGuard('jwt'))
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  findAllByUser(@Request() req) {
    return this.activityService.findAllByUser(req.user.id);
  }

  @Patch(':id/complete')
  markAsComplete(@Param('id') id: string) {
    return this.activityService.markAsComplete(Number(id));
  }
}