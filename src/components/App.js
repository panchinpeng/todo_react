import React, {Component} from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import './App.css'
import Header from './Header.js'
import Add from './Add'
import Detail from '../views/Detail'
export default class App extends Component{
  render(){
    return (
      <div>
        <Header />
        <Add />
        <div className="nav-wrap">
          <NavLink to="/all" className="nav-link">all</NavLink>
          <NavLink to="/do" className="nav-link">finish</NavLink>
          <NavLink to="/undo" className="nav-link">unfinished</NavLink>
        </div>
        <Switch>
          <Route path="/all" component={Detail}></Route>
          <Route path="/do" component={Detail}></Route>
          <Route path="/undo" component={Detail}></Route>
        </Switch>
      </div>
      
    )
  }
}