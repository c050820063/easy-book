import * as React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import './style.less';

// export interface IProps {
//   value: number
// }
// const Header = ({ value }: IProps) => {
//   return <div>clicked: { value }times</div>
// }

// interface Props {

// }

interface Istate {
  focused: boolean
}

interface Iprops {
  focused?: boolean,
  handleChangeFocused: (state: boolean) => void
}

class Header extends React.Component<Iprops> {
  public render() {
    const {
      focused,
      handleChangeFocused,
    } = this.props
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
              <CSSTransition
                in={focused}
                timeout={300}
                classNames="slide"
              >
                <div className={`search ${focused ? 'focused' : ''}`}>
                  <input
                    placeholder="搜索"
                    type="text"
                    onFocus={handleChangeFocused.bind(this, true)}
                    onBlur={handleChangeFocused.bind(this, false)}
                  />
                  <div className="searchIcon">
                    <i className="iconfont iconsearch1187938easyiconnet" />
                  </div>
                </div>
              </CSSTransition>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state: { Header: Istate }): Istate => ({
  focused: state.Header.focused
})

const mapDispatchToProps = (dispatch: any): Iprops => {
  return {
    handleChangeFocused(state: boolean): void {
      // console.log(actionCreators.getInputChangeAction(state))
      dispatch(actionCreators.getInputChangeAction(state))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)