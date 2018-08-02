import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table/Table';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table data={data.fa.fa_data}/>
      </div>
    );
  }
}

export default App;
