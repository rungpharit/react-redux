import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './pen.module.css'
import { addPen , buyPen } from '../../redux/pen/penAction'

class Pen extends Component {
  render() {
    return (
      <div className={style.container}>
        <h2>Number of Pens - {this.props.numOfPens}</h2>
        <div className={style.button}>
          <button onClick={() => {this.props.addPen()}}>Add Pen</button>
          <button onClick={() => {this.props.buyPen()}}>Buy Pen</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    numOfPens:state.pen.numOfPens
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPen : () => dispatch(addPen()),
    buyPen : () => dispatch(buyPen())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pen);