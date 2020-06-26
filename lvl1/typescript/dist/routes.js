"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloTypescript = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
exports.helloTypescript = function (request, response) {
    var user = CreateUser_1.default({
        email: 'luanfv@gmail.com',
        password: '123456',
        techs: ['ReactJS', 'React Native', 'NodeJS', { name: 'React Native', expertise: 66 }],
    });
    return response.json(user);
};
