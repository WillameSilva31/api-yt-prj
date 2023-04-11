import { config } from 'dotenv'
import { createConnection } from 'mysql2/promise'
import { credentials } from '../mysql';
config();

const migrations = async () => {
  const connection = await createConnection(credentials)

  const userTable = 'CREATE TABLE IF NOT EXISTS users (user_id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255) UNIQUE, password VARCHAR(255))'

  const videosTable = 'CREATE TABLE IF NOT EXISTS videos (video_id INT PRIMARY KEY AUTO_INCREMENT, user_id INT NOT NULL, title VARCHAR(255), description VARCHAR(255), FOREIGN KEY (user_id) REFERENCES users(user_id))'

  await connection.query(userTable)
  await connection.query(videosTable)
  console.log('Users and Videos created with success!')
  process.exit()

}

migrations()