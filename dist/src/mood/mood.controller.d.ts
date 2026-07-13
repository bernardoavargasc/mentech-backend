import { MoodService } from './mood.service';
export declare class MoodController {
    private readonly moodService;
    constructor(moodService: MoodService);
    createMood(req: any, body: {
        state: string;
    }): Promise<{
        id: number;
        createdAt: Date;
        state: string;
        userId: number;
    }>;
    getLatestMood(req: any): Promise<{
        id: number;
        createdAt: Date;
        state: string;
        userId: number;
    } | null>;
}
