import {verify}  from "jsonwebtoken"

const login = (request: any, response:any, next:any) =>{
    try{
        const decode = verify(request.headers.authorization, process.env.SECRET as string);
        request.user = decode;
        next();
    } catch(error){
        return response.status(402).json({error:"não foi validado"})
    }
}

export {login};