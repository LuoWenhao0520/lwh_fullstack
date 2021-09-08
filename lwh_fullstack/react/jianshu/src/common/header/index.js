import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import { Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper } from './style';

class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      focused: false
    }
    this.handleFocusInput = this.handleFocusInput.bind(this)
    this.handleBlurInput = this.handleBlurInput.bind(this)
  }

  handleFocusInput() {
    this.setState({
      focused: true
    })
  }

  handleBlurInput() {
    this.setState({
      focused: false
    })
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo href="/"></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont icon-Aa"></i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch 
                onFocus={this.handleFocusInput} 
                onBlur={this.handleBlurInput}
                className={this.state.focused ? 'focused' : ''}
              >
              </NavSearch>

            </CSSTransition>
            <i className={this.state.focused ? 'iconfont icon-fangdajing focused' : 'iconfont icon-fangdajing'}></i>
            
          </SearchWrapper>
          
          <Addition>
            <Button className="writting">
              <i className="iconfont icon-maobi"></i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispathToProps = (dispathc) => {
  return {}
}

export default connect(mapStateToProps,mapDispathToProps)(Header)