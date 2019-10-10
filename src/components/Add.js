import React, { Component } from 'react'
import { connect } from 'react-redux'

import { AddTodo } from '../redux/actions'
import './Add.css'
class Add extends Component {
  send = (e) => {
    if (e.which === 13 && e.ctrlKey && e.target.value) {
      this.props.sendTodo(e.target.value)
      e.target.value = ''
    }
  }
  render() {
    return ( 
      <div className = "add-wrap" >
        <textarea rows = "5" className = "commit-input"  onKeyDown = { this.send }/> 
      </div>
    )
  }
}
let mapStatetoProps = (state) => ({

})
let mapDispatchToProps = (dispatch) => ({
  sendTodo : (title) => {
    dispatch(AddTodo(title))
  }
})

export default connect(mapStatetoProps, mapDispatchToProps)(Add)