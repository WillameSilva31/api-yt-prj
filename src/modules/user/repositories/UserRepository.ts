import { Request, Response } from 'express'
import { pool } from '../../../mysql';
import { v4 as uuidv4} from 'uuid';
import { hash, compare } from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';

class UserRepository {
    create(request:Request, response:Response){
        const {name, email, password } = request.body;
        pool.getConnection((err: any, connection: any)=>{
            hash(password, 10, (err,hash)=>{    
                if(err) {
                    return response.status(500).json(err)
                } 
                connection.query(
                    'INSERT INTO users (user_id, name, email, password) VALUES (?, ?, ?, ?)',
                    [uuidv4(), name, email, hash],
                    (error: any,results: any, fileds: any) => {
                        connection.release();
                        if(error) {
                            return response.status(400).json(error)
                        }
                        response.status(200).json({success: "Usuário criado!"});
                    }
                ) 
            })  
        })  
    }

    login(request:Request, response:Response){
        const { email, password  } = request.body;
        pool.getConnection((err:any, connection:any)=>{       
            if(err) {
                return response.status(500).json(err)
            }          
            connection.query(
                'SELECT * FROM users WHERE email = ?',
                [email],
                (error:any, results:any, fileds:any) => {
                    connection.release();
                    if(error) {
                        return response.status(400).json({error: "erro, não se encontra o email no database"})
                    }
                    compare(password, results[0].password, (err, result)=>{
                        if(err) {
                            return response.status(400).json({error: "erro na autenticação"})
                        }
                        if(result) {
                            const token = sign({
                                id: results[0].user_id,
                                email: results[0].email
                            },process.env.SECRET as string, {expiresIn:'1d'})

                        return response.status(200).json({token:token, message: "autenticado!"})
                        }
                    })
                }
            )     
        })
    }

    getUser(request:any, response:any){
        const decode:any = verify(request.headers.authorization, process.env.SECRET as string);
        if (decode.email){
            pool.getConnection((error, connection)=>{
                connection.query(
                    'SELECT * FROM users WHERE email=?',
                    [decode.email],
                    (error:any,results:any, fields:any) =>{
                        connection.release();
                        if(error){
                            return response.status(400).send({error:error, response: null})
                        }

                        const token = sign({
                            id: results[0].user_id,
                            email: results[0].email
                        },process.env.SECRET as string, {expiresIn:'1d'})

                        return response.status(202).send({
                            user: {
                                name: results[0].name,
                                email: results[0].email,
                                id: results[0].user_id,
                            }, token
                            
                        })
                    }
                )
            })
        }
    }
}



export {UserRepository};