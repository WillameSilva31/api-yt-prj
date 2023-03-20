"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const login = (request, response, next) => {
    try {
        const decode = (0, jsonwebtoken_1.verify)(request.headers.authorization, process.env.SECRET);
        request.user = decode;
        next();
    }
    catch (error) {
        return response.status(402).json({ error: "não foi validado" });
    }
};
exports.login = login;
