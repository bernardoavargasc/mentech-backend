import { ActivityService } from './activity.service';
export declare class ActivityController {
    private readonly activityService;
    constructor(activityService: ActivityService);
    findAllByUser(req: any): Promise<{
        id: number;
        name: string;
        userId: number;
        duration: number | null;
        isCompleted: boolean;
        date: Date;
    }[]>;
    markAsComplete(id: string): Promise<{
        id: number;
        name: string;
        userId: number;
        duration: number | null;
        isCompleted: boolean;
        date: Date;
    }>;
}
