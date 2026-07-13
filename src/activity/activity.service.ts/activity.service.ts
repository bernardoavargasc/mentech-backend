import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) {}

  async findAllByUser(userId: number) {
    return this.prisma.activity.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
    });
  }

  async markAsComplete(id: number) {
    return this.prisma.activity.update({
      where: { id },
      data: { isCompleted: true },
    });
  }
}