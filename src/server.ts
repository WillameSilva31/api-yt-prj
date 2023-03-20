import express from 'express';
import { userRoutes } from './routes/user.routes';
import { videosRoutes } from './routes/videos.routes';
import { config } from 'dotenv';

const app = express();
config();

app.use(express.json());
app.use('/user', userRoutes);
app.use('/videos', videosRoutes);




app.listen(4000);

