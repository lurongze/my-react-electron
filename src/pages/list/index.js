import React, { Component } from 'react';
import './index.css';

import { history } from "../../utils/helper";

class Index extends Component {

  linkIndex = () => {
    history.push('/index/')
  }

  render() {

    return (
      <div>
        List Page
        <div onClick={this.linkIndex.bind(this)}>LINK INDEX PAGE</div>
        <p>
          {this.props.match.params.id}
        </p>
      </div>
    )
  }

}

export default Index;
