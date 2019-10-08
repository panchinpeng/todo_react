import React,{Component} from 'react'
import './Add.css'
export default class extends Component{
  render(){
    return(
      <div className="add-wrap">
        <textarea rows="5" className="commit-input"/>
      </div>
    )
  }
}