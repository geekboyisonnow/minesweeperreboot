import React, { Component } from 'react'

class Cell extends Component {
  checkCell = event => {
    console.log(`Clicked at row ${this.props.row} column ${this.props.col}!`)
    this.props.checkCell(this.props.row, this.props.col)
  }
  flagCell = event => {
    event.preventDefault()
    this.props.flagCell(this.props.row, this.props.col)
  }
  render() {
    return <td onClick={this.checkCell} onContextMenu={this.flagCell} />
  }
}

export default Cell
