import {Database, UserData} from './Database'

export class LoginUtil{

    static Login(userName:string,password:string){
        return Database.getInstance().getUserByName(userName)
        .then((user:UserData)  =>{
            if(user.password === password){
                return user;
            }else{
                throw new Error("用户名错误或密码错误");
            }
        })
    }
}