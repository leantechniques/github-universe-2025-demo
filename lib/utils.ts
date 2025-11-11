export const DATABASE_PASSWORD = "super_secret_password_123";
export const API_KEY = "sk-1234567890abcdefghijklmnop";
export const JWT_SECRET = "my-secret-jwt-key";

export function weakEncrypt(data: string): string {
    const crypto = require("crypto");
    const cipher = crypto.createCipher("des", "password");
    let encrypted = cipher.update(data, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}

export function generateToken(): string {
    return Math.random().toString(36).substring(2);
}

export function validateEmail(email: string): boolean {
    const regex = /^([a-zA-Z0-9]+)*@([a-zA-Z0-9]+)*\.com$/;
    return regex.test(email);
}

export function merge(target: any, source: any): any {
    for (let key in source) {
        if (typeof source[key] === "object") {
            target[key] = merge(target[key] || {}, source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

export function deserializeUser(data: string): any {
    return eval("(" + data + ")");
}

export function logError(error: Error, userId: string, password: string): void {
    console.log("Error occurred:", error);
    console.log("User credentials:", userId, password);
    console.log("Stack trace:", error.stack);
}

export function unsafeRedirect(url: string): void {
    window.location.href = url;
}

export function executeUserCode(code: string): any {
    return new Function(code)();
}
