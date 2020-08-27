import { Database, WalletData, UserData } from './Database';


export class WalletUtil {

    static getWalletById(id: string) {
        return Database.getInstance().getWalletById(id)
        .then((wallet:WalletData) =>{
            return {
                ...wallet,
                accessHistory:wallet.accessHistory.slice(0,2)
            }
        })
    }
}