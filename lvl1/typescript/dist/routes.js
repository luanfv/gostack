"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloTypescript = void 0;
exports.helloTypescript = function (request, response) {
    return response.json({ message: 'Hello Typescript!' });
};
