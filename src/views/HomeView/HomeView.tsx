import React from 'react';
import './HomeView.less';
import { WalletData } from '../../models/Database';
import { WalletUtil } from '../../models/WalletUtil';
import { Global } from '../../models/Global';

export interface HomeViewProps {
    match: {
        params: {
            userId: string,
            walletId: string
        }
    }
}
export interface HomeViewState {
    wallet: WalletData
}

export default class HomeView extends React.Component<HomeViewProps, HomeViewState> {
    state = {
        wallet: {
            id: "000000000000",
            name:'',
            amount: 0,
            accessHistory: []
        },
    }
    userId:number = 0;
    componentDidMount() {
        let walletId = this.props.match.params.walletId;
        let userId = this.props.match.params.userId;
        this.userId = parseInt(userId);
        this.getWalletById(walletId);
    }

    render() {
        return (
            <div className='HomeView'>
                <header>
                    <div className="round-group">
                        <button className="round1"></button>
                        <button className="round2"></button>
                    </div>
                    <h1 className="title">主页</h1>
                </header>
                <section>
                    <div className="card">
                        <div className="left-shadow"></div>
                        <img src={require("./images/Illus_Card 3 Copy@2x.png")} alt="" />
                        <div className="right-shadow"></div>
                    </div>
                    <div className="function">
                        <h2 className="title">操作</h2>
                        <div className="function-card">
                            <div className="card">
                                <img src={require("./images//Recharge button@2x.png")} alt="" onClick={()=>{this.onClickRechargeBtn()}} />
                            </div>
                            <div className="card">
                                <img src={require("./images/Transfer button@2x.png")} alt="" />
                            </div>
                            <div className="card">
                                <img src={require("./images//Exchange button@2x.png")} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="transactic-history">
                        <div className="top">
                            <h2 className="title">交易记录</h2>
                            <a className="more">更多</a>
                        </div>
                        <ul>
                            {this.state.wallet.accessHistory.map((v, i) => {
                                return (
                                    <li key={i}>
                                        <div className="left">
                                            <div className="transactic-name">{v.type}</div>
                                            <div className="from">{v.from}</div>
                                        </div>
                                        <div className="right">
                                            <div className="amount">{v.amount}$</div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
                <footer>
                    <div className="btn-list">
                        <img src={require("./images/Bars _ Tab Bar _ Option 1 _ 5@2x.png")} alt="" />
                    </div>
                </footer>
            </div>
        )
    }

    onClickRechargeBtn() {
        let walletId = this.props.match.params.walletId;
        let userId = this.props.match.params.userId;
        Global.history.push(`/recharge/${userId}/${walletId}`);
    }
    getWalletById(id:string) {
        WalletUtil.getWalletById(id)
            .then(value => {
                this.setState({
                    wallet: value
                })
            }).catch(err => console.log(err.message));
    }
}