import React, { Component } from 'react';
import style from './style.less';

class Header extends Component {
  render() {
    return (
      <div className={style.header}>
        <i className="iconfont iconwrite"></i>
        header
      </div>
    )
  }
}

export default Header