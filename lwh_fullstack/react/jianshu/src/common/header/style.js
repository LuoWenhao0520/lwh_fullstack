import styled from 'styled-components'
import logoPic from '../../statics/jianshu.png'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  background-image: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right{
    float: right;
  }
  &.active{
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  font-size: 14px;
  margin-left: 20px;
  &::placeholder {
    color: #777;
  }
  &.focused {
    width: 260px;
  }

  
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ea6f5a;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 16px;
  &.reg{
    color: #ea6f5a;
  }
  &.writting {
    background: #ea6f5a;
    color: #fff;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  overflow: hidden;
  position: relative;
  .slide-enter{
    transition: all .2s ease-out;
  }
  .slide-enter-active{
    width: 260px;
  }

  .slide-exit{
    transition: all .2s ease-out;
  }

  .slide-exit-active {
    width: 160px;
  }
  .iconfont {
    position: absolute;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    right: 5px;
    bottom: 5px;
    border-radius: 15px;
    &.focused {
      background-color: #777;
      color: white;
    }
    /* background-color: green; */
    
  }
`