import { connectWithoutExpress } from "../utils/connect"
import { config } from 'dotenv'

config();

const migrations = async () => {
  const connection = await connectWithoutExpress()

  const userTable = 'CREATE TABLE IF NOT EXISTS users (user_id INT PRIMARY KEY AUTO_INCREMENT, name varchar(255), email varchar(255) unique, password varchar(255))'
  connection.query(userTable)

  console.log('Users and Videos created with success!')
  process.exit()

}

migrations()