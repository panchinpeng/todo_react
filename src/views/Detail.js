import React,{Component} from 'react'
import { connect } from 'react-redux'


import './Detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
class Detail extends Component{
  
  render(){
    console.log(this.props.todos)
    return (
      <div className="list-wrap">
        <ul>
          
          {this.props.todos.map((item, index) => (
          <li className="item-li" key={index}>
            <div className="item-wrap">{item}</div>
            <div className="do-wrap">
              <span className="do-operator"><FontAwesomeIcon icon={faCheck} /></span>
              <span className="do-operator"><FontAwesomeIcon icon={faTimesCircle} /></span>
            </div>
          </li>))}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps)(Detail)
