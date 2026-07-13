import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            name: string;
            role: import("@prisma/client").$Enums.Role;
        };
    }>;
    getProfile(req: any): any;
}
