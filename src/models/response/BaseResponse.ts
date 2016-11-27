export abstract class BaseResponse {

    public status: number;
    public success: boolean;
    public data: any;
    public errors: string[];
    public message: string;
    
    constructor(status: number, message: string, data?: any, errors?: string[]) {
        this.message = message || "";
        this.data = data || {};
        this.errors = errors || [];        
        this.success = this.errors.length == 0;
        this.status = status;
    }
    
}