import React,{Component} from 'react'
import { connect } from 'react-redux'


import { doFinish } from '../redux/actions'
import './Detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
class Detail extends Component{
  doFinish = (index) => {
    this.props.doFinish(index)
  }
  render(){
    let path = this.props.match.path
    return (
      <div className="list-wrap">
        <ul>
          
          {this.props.todos.map((item, index) => {
            if ( 
              (path === '/do' && item.complete === true) ||
              (path === '/undo' && item.complete === false) ||
              (path === '/all')
            ) {
              return (
                <li className="item-li" key={index}>
                  <div className={path === '/do' || item.complete === true ? 'item-wrap-finish' : 'item-wrap'}>{item.title}</div>
                  {
                    ( item.complete !== true && path !== '/do' ) ?
                      <div className="do-wrap">
                        <span className="do-operator" onClick={ () => { this.doFinish(index) }}><FontAwesomeIcon icon={faCheck} /></span>
                      </div> : <div />
                  }
                </li>
              )
            }

            
              
          })}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  todos: state.todos
})
let mapDispatchToProps = (dispatch) => ({
  doFinish: (index) => {
    dispatch(doFinish(index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
