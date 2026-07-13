import { SosService } from './sos.service';
export declare class SosController {
    private readonly sosService;
    constructor(sosService: SosService);
    sendAlert(req: any): Promise<{
        success: boolean;
        message: string;
        timestamp: Date;
    }>;
}
