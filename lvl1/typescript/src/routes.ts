import { Request, Response } from 'express';

export const helloTypescript = (request: Request, response: Response) => {
    return response.json({ message: 'Hello Typescript!' });
}