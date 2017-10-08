declare module '@app/http' {

    export interface IHttpMessage {
        status?: number;
        title?: string;
        message?: string;
        errors?: string[];
        errorCode?: number;
        data?: any;
    }

}
