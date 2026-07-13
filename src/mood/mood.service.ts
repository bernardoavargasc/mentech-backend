import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MoodService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, state: string) {
    return this.prisma.mood.create({
      data: {
        userId,
        state,
      },
    });
  }

  async findLatest(userId: number) {
    return this.prisma.mood.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}