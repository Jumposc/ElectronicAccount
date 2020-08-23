import React from 'react';

class Recharge extends React.Component {
    render() {
        return (
            <div className='Recharge'>
                <header>
                    <div className="round-group">
                        <button className="round1"></button>
                        <button className="round2"></button>
                    </div>
                    <h1 className="title">充值</h1>
                    <div className="source">来源:中国银行</div>
                </header>
                <section>
                    <div className="info">选择钱包</div>
                    <div className="card">
                        <div className="wallet">
                            <div className="wallet-info">
                                <div className="wallet-name">人民币钱包</div>
                                <div className="wallet-id">1234 5678 9102 2449</div>
                                <div className="triangle"></div>
                            </div>
                            <div className="hr"></div>
                            <div className="bottom">
                                <img src="./images/Icon_Glyph_Star Copy 2@2x.png" alt="" />
                                <div className="balance">可用余额</div>
                                <div className="amount">$23000</div>
                            </div>
                        </div>
                    </div>
                    <div className="recharge">
                        <div className="title">充值</div>
                        <div className="amount-title">
                            <div className="text">金额</div>
                        </div>
                        <div className="amount-card">
                            <div className="card">
                                <div className="amount">
                                    $10
                        </div>
                            </div>
                            <div className="card">
                                <div className="amount">
                                    $50
                        </div>
                            </div>
                            <div className="card">
                                <div className="amount">
                                    $100
                        </div>
                            </div>
                            <div className="card">
                                <div className="amount">
                                    $200
                        </div>
                            </div>
                            <div className="card">
                                <div className="amount">
                                    $500
                        </div>
                            </div>
                            <div className="card">
                                <div className="amount">
                                    $1000
                        </div>
                            </div>
                        </div>
                    </div>
                    <button className="continue">
                        <div className="text">下一步</div>
                    </button>
                </section>
            </div>

        )
    }
}