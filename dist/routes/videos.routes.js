"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRoutes = void 0;
const express_1 = require("express");
const login_1 = require("../middleware/login");
const videosRepository_1 = require("../modules/videos/repositories/videosRepository");
const videosRoutes = (0, express_1.Router)();
exports.videosRoutes = videosRoutes;
const videosRepository = new videosRepository_1.VideosRepository();
videosRoutes.post('/create-videos', login_1.login, (request, response) => {
    videosRepository.create(request, response);
});
videosRoutes.get('/get-videos', (request, response) => {
    videosRepository.getVideos(request, response);
});
videosRoutes.get('/search', (request, response) => {
    videosRepository.searchVideos(request, response);
});
