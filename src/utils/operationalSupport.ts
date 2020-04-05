import jwt from "jsonwebtoken";

export const createToken = (payload: any, secret: string) => {
    return jwt.sign(payload, secret);
}

export const add = (first: number, second: number) => {
    return first+second;
}