export interface UserData{
    id:number,
    name:string,
    password:string,
    walletsId:string[]
}

export interface WalletData {
    id: string,
    name:string,
    amount: number,
    accessHistory: {
        type: string,
        from: string,
        amount: number
    }[]
}


export class Database{
    private static _instance:Database;
    static getInstance(){
        if(!this._instance){
            this._instance = new Database();
        }
        return this._instance;
    }

    userTable:UserData[] =[
        {
            id:1,
            name:"test",
            password:"123456",
            walletsId:["1234567898765432","0987654312346789"]
        }
    ]
    
    WalletTable: WalletData[] = [
        {
            id: "1234567898765432",
            amount: 1000,
            name:'人民币钱包',
            accessHistory: [
                {
                    type: "工资转入",
                    from: "公司",
                    amount: 3000
                },
                {
                    type: "消费",
                    from: "苹果",
                    amount: -6000
                }
            ]
        },
        {
            id: "0987654312346789",
            name:'工资卡',
            amount: 800,
            accessHistory: [
                {
                    type: "工资转入",
                    from: "公司",
                    amount: 3000
                },
                {
                    type: "尾矿交付",
                    from: "公司",
                    amount: -30000
                }
            ]
        }
    ]

    getUserByName(userName:string){
        return new Promise((resolve,reject)=>{
            let user = this.userTable.find(v => v.name === userName);
            if(user){
                resolve(user);
            }else{
                reject(new Error('没有找到该用户'))
            }
        })
    }
    getUserById(id:number){
        return new Promise((resolve,reject)=>{
            let user = this.userTable.find(v => v.id === id);
            if(user){
                resolve(user);
            }else{
                reject(new Error('没有找到该用户'))
            }
        })
    }

    getWalletById(id:string){
        return new Promise((resolve, reject) => {
            let wallet = this.WalletTable.find(v => v.id === id);
            if (wallet) {
                resolve(wallet);
            } else {
                reject(new Error('没有找到该卡'))
            }
        })
    }


}
