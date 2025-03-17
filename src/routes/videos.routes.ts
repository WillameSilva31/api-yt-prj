import { request, response, Router } from "express";
import { login } from "../middleware/login";
import { VideosRepository } from "../modules/videos/repositories/VideosRepository";
import {verify}  from "jsonwebtoken"

 const videosRoutes = Router();
 const videosRepository = new VideosRepository();


 videosRoutes.post('/create-videos',login, (request , response)=>{
    videosRepository.create(request, response);
 })
 
 videosRoutes.get('/get-videos', login, (request, response) => {
   videosRepository.getVideos(request, response);
 })

 videosRoutes.post('/search', (request, response) =>{
  videosRepository.searchVideos(request, response)
 })

 


 export {videosRoutes}; 