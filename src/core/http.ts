declare module '@app/http' {

    export interface IHttpMessage {
        status?: number;
        title?: string;
        message?: string;
        errors?: string[];
        code?: number;
        data?: any;
    }

    export interface IHttpMessageDetails {
        message?: string;
        title?: string;
    }

}
