import React from 'react';
import './HomeView.less';

export default class HomeView extends React.Component {
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
                                <img src={require("./images//Recharge button@2x.png")} alt="" />
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
                            <li>
                                <div className="left">
                                    <div className="transactic-name">工资转入</div>
                                    <div className="from">来自公司</div>
                                </div>
                                <div className="right">
                                    <div className="amount">+$1000</div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <div className="transactic-name">工资转入</div>
                                    <div className="from">来自公司</div>
                                </div>
                                <div className="right">
                                    <div className="amount">+$1000</div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <div className="transactic-name">工资转入</div>
                                    <div className="from">来自公司</div>
                                </div>
                                <div className="right">
                                    <div className="amount">+$1000</div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <div className="transactic-name">工资转入</div>
                                    <div className="from">来自公司</div>
                                </div>
                                <div className="right">
                                    <div className="amount">+$1000</div>
                                </div>
                            </li>
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
}