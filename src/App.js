import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, minus } from './redux/actions/counter';
import { add as listAdd, asyncAdd } from './redux/actions/list';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {

  handleClick = (key) => {
    const { add, minus, asyncAdd } = this.props;
    this.getList();
    console.log('this.props', this.props);
    console.log('this.state', this.state);

    if(key === 'add') {
      add();
      // listAdd('listAdd');
      asyncAdd({
        key: new Date().getTime(),
        value: `listAdd${new Date().getTime()}`
      });
    } else {
      minus();
    }
  }

  getList = () => {
    axios.get(`https://1946755280.gitee.io/data.txt`)
      .then((response)=> {
        console.log('https://1946755280.gitee.io/data.txt',response)
      })
  }

  render() {

    const { list } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="alt" />
          <div onClick={this.handleClick.bind(this,'add')}>ADD</div>
          <div onClick={this.handleClick.bind(this,'minus')}>MINUS</div>
          <div>DEFAULT -- {this.props.counter.num}</div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {
            list.map((item)=>{
              return (<div key={item.key}>{item.value}</div>)
            })
          }
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(
  ({ counter, list }) => ({
    counter, list
  }),
  { add, minus, listAdd, asyncAdd }
)(App);
