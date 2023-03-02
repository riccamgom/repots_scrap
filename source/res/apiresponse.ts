export interface apiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export class apiResponseUtil {

    public static success<T>(data: T): apiResponse<T> {
        return { success: true, data };
    }

    public static error(error: string): apiResponse<null> {
        return { success: false, error };
    }
}