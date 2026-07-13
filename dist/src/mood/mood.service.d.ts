import { PrismaService } from '../prisma/prisma.service';
export declare class MoodService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, state: string): Promise<{
        id: number;
        createdAt: Date;
        state: string;
        userId: number;
    }>;
    findLatest(userId: number): Promise<{
        id: number;
        createdAt: Date;
        state: string;
        userId: number;
    } | null>;
}
