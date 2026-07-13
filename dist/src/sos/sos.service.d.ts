import { PrismaService } from '../prisma/prisma.service';
export declare class SosService {
    private prisma;
    constructor(prisma: PrismaService);
    triggerAlert(userId: number): Promise<{
        success: boolean;
        message: string;
        timestamp: Date;
    }>;
}
