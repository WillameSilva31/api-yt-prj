import mysql from 'mysql2';
import { config } from 'dotenv';
config();

const pool = mysql.createPool({
    "user": process.env.USER_DATABASE,
    "password":'mendes',
    "database":'api-youtube-project',
    "host":'localhost',
    "port": 3306

})



export { pool };

