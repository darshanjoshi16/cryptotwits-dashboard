import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#fcdf03"}}>
                    <div className="container-fluid">


                    <a className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
                            style={{ fontFamily: 'NHaasGroteskDSPro-65Md'}} href="/">CryptoTwits</a>
                    
                    <span>
          <div class="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold ">
                <div class="copyright">
                    &copy; All Rights Reserved,2022.
                </div>
          </div> 
      </span>
     
        <span>
          <div class="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold justify-content-center ">
              <div class="copyright">
                  Designers: <a href="https://github.com/darshanjoshi16"> Darshan Joshi </a>
              </div>
            </div>
            
        </span>
      
        <span>
          <div class="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold justify-content-center">
            <div class="copyright">
                 <a href="https://github.com/devparekh24"> Dev Parekh</a>
            </div>
          </div>
        </span>
                        
                    <select className="form-select form-select-lg " aria-label=".form-select-lg example" name='selectCoin'
                            style={{ width: "fit-content" }} onChange={this.props.handle_Submit} align='center'>
                            <option value="bitcoin">Select Coin</option>
                            <option value="avalanche-2">Avalanche (AVAX)</option>
                            <option value="binancecoin">Binance (BNB)</option>
                            <option value="bitcoin">Bitcoin (BTC) </option>
                            <option value="cardano">Cardano (ADA)</option>
                            <option value="decentraland">Decentraland (MANA)</option>
                            <option value="dogecoin">Dogecoin (DOGE)</option>
                            <option value="ethereum">Ethereum (ETH)</option>
                            <option value="ripple">Ripple (XRP)</option>
                            <option value="solana">Solana (SOL)</option>
                            <option value="tether">Tether (USDT)</option>
                    </select>

                        

                    </div>
                </nav>
            </div>
        )
    }
}

export default Header