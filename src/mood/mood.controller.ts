import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MoodService } from './mood.service'; // Asegúrate de tener este servicio

@Controller('moods')
@UseGuards(AuthGuard('jwt')) // Solo usuarios logueados pueden acceder
export class MoodController {
  constructor(private readonly moodService: MoodService) {}

  @Post()
  createMood(@Request() req, @Body() body: { state: string }) {
    return this.moodService.create(req.user.id, body.state);
  }

  @Get('latest')
  getLatestMood(@Request() req) {
    return this.moodService.findLatest(req.user.id);
  }
}