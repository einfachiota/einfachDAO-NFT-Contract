import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  openWallet = async () => {
    await console.log({ //ethereum.request
      method: 'eth_requestAccounts'
    });
  }


render() {

  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  } else {
    console.log('Please install MetaMask!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className="enable" onClick={this.openWallet}>Enable Ethereum</button>
      </header>
    </div>
  );
}
}

export default App;
