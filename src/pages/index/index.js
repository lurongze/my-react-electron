import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, minus } from '../../redux/actions/counter';
import { add as listAdd, asyncAdd } from '../../redux/actions/list';

import { ipcRender } from "../../utils/ELECTRON";
import { history } from "../../utils/helper";

import axios from 'axios';

import './index.css';

class Index extends Component {

  state = {
    koaRes: 'empty string'
  }

  handleClick = (key) => {
    const { add, minus, asyncAdd } = this.props;
    this.getList();
    if(key === 'add') {
      add();
      // listAdd('listAdd');
      asyncAdd({
        key: new Date().getTime(),
        value: `listAdd${new Date().getTime()}`
      });
      ipcRender.send('flashTray');
    } else {
      minus();
      ipcRender.send('cancelFlashTray');
    }
  }

  getList = () => {
    console.log('getListFunction');
    axios.get('http://localhost:3016').then((response)=>{
      const res = response.data;
      this.setState({
        koaRes: res
      })
    })
  }

  linkList = () => {
    history.push('/list/this-is-list-page')
  }

  render() {
    const { list } = this.props;
    const { koaRes } = this.state;
    return (
      <div className="page">
        <header className="App-header">
          <div>{koaRes}</div>
          <div onClick={this.linkList.bind(this)}>LINK LIST</div>
          <div onClick={this.handleClick.bind(this,'add')}>ADD</div>
          <div onClick={this.handleClick.bind(this,'minus')}>MINUS</div>
          <div>DEFAULT -- {this.props.counter.num}</div>
          {
            list.map((item)=>{
              return (<div key={item.key}>{item.value}</div>)
            })
          }
        </header>
      </div>
    )
  }

}

export default connect(
  ({ counter, list }) => ({
    counter, list
  }),
  { add, minus, listAdd, asyncAdd }
)(Index);
