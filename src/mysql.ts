import mysql from 'mysql2';
import { config } from 'dotenv';
config();

const credentials = {
    "user": process.env.USER_DATABASE,
    "password": process.env.PASSWORD_DATABASE,
    "database": process.env.DATABASE,
    "host": process.env.HOST_DATABASE,
    "port": Number(process.env.PORT_DATABASE)
}

const pool = mysql.createPool(credentials)



export { pool, credentials };

