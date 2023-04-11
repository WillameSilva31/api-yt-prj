import express from 'express';
import { userRoutes } from './routes/user.routes';
import { videosRoutes } from './routes/videos.routes';
import { config } from 'dotenv';

config();
const app = express();

const cors = require('cors');

app.use(function(require,response, next){
    response.header("Acess-Control-Allow-Origin","*");
    response.header("Acess-Control-Allow-Headers","Origin, X-request, Content-Type, Accept");
    response.header("Acess-Control-Allow-Methods","POST, GET, PATCH, DELETE, OPTIONS");
    next();
})

app.use(cors());

app.use(express.json());
app.use('/user', userRoutes);
app.use('/videos', videosRoutes);




const PORT = 4000;
app.listen(PORT, () => console.log(`App listen at http://localhost:${PORT}`));

