import { request, response, Router } from "express";
import { login } from "../middleware/login";
import { VideosRepository } from "../modules/videos/repositories/VideosRepository";

 const videosRoutes = Router();
 const videosRepository = new VideosRepository();


 videosRoutes.post('/create-videos', login, (request , response)=>{
    videosRepository.create(request, response);
 })
 
 videosRoutes.get('/get-videos', (request, response) => {
   videosRepository.getVideos(request, response);
 })

 videosRoutes.get('/search', (request, response) =>{
  videosRepository.searchVideos(request, response)
 })

 export {videosRoutes}; 