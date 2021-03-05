import React from "react"
import {Navbar,Menu,ItemMenu,Anchor} from './style'


export default function Header(props) {

  return (
  <header>
      <Navbar>
          <Menu>
              <ItemMenu><Anchor to='/' activeClassName="active-link" >Home</Anchor></ItemMenu>
              <ItemMenu><Anchor to="/projects"  activeClassName="active-link" >Projects</Anchor></ItemMenu>
              <ItemMenu><Anchor to="/articles"  activeClassName="active-link" >Articles</Anchor></ItemMenu>
              <ItemMenu><Anchor to="/about"  activeClassName="active-link" >About</Anchor></ItemMenu>
          </Menu>
      </Navbar>
  </header>
  )
}
