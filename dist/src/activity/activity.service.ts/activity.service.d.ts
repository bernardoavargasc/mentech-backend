import { PrismaService } from "../../prisma/prisma.service";
export declare class ActivityService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllByUser(userId: number): Promise<{
        id: number;
        name: string;
        userId: number;
        duration: number | null;
        isCompleted: boolean;
        date: Date;
    }[]>;
    markAsComplete(id: number): Promise<{
        id: number;
        name: string;
        userId: number;
        duration: number | null;
        isCompleted: boolean;
        date: Date;
    }>;
}
