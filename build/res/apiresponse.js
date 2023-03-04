"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiResponseUtil = void 0;
class apiResponseUtil {
    static success(data) {
        return { success: true, data };
    }
    static error(error) {
        return { success: false, error };
    }
}
exports.apiResponseUtil = apiResponseUtil;
