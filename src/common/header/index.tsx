import * as React from 'react';
import './style.less';

// export interface IProps {
//   value: number
// }
// const Header = ({ value }: IProps) => {
//   return <div>clicked: { value }times</div>
// }

// interface Props {

// }

interface State {
  name: string
}

class Header extends React.Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      name: ''
    }
  }
  public render() {
    return (
      <div className="navbar">
        <a href="/" className="logo" />
        <div className="menu">
          <ul>
            <li>
              <a href="/" className="tab active">
                首页
              </a>
            </li>
            <li>
              <div className="tab">
                下载App
              </div>
            </li>
            <li >
              <div className="search">
                <input placeholder="搜索" type="text" />
                <div className="searchIcon">
                  <i className="iconfont iconsearch1187938easyiconnet" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header