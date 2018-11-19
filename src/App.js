import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      game: {
        id: 1,
        board: [
          [' ', '10', ' ', ' ', ' ', ' ', ' ', '9'],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', '*', ' ', '12', ' ', ' ', ' '],
          ['00', ' ', ' ', ' ', ' ', ' ', '88', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', '13', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', '8', ' ', ' ', ' '],
          [' ', '11', ' ', ' ', ' ', ' ', ' ', ' ']
        ],
        state: 'new',
        mines: 7
      }
    }
  }

  newGame = event => {
    axios.post('https://minesweeper-api.herokuapp.com/games').then(response => {
      console.log(response.data)
      // Why does Gavin use this.setState?
      this.setState({
        playing: true,
        game: response.data
      })
    })
  }

  headerText = () => {
    if (this.state.playing) {
      return `Game #${this.state.game.id}`
    } else {
      return 'Start a new game!!!'
    }
  }

  minesText = () => {
    if (this.state.playing) {
      return `${this.state.game.mines} mines left`
    } else {
      return ` `
    }
  }

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td className="header" colSpan="8">
                <select>
                  <option value="0">Easy</option>
                  <option value="1">Intermediate</option>
                  <option value="2">Expert</option>
                </select>
                <button onClick={this.newGame}>
                  <span>😄</span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="header not-playing" colSpan="8">
                {this.headerText()}
              </td>
            </tr>
            <tr>
              <td>{this.state.game.board[0][0]}</td>
              <td>{this.state.game.board[0][1]}</td>
              <td>{this.state.game.board[0][2]}</td>
              <td>{this.state.game.board[0][3]}</td>
              <td>{this.state.game.board[0][4]}</td>
              <td>{this.state.game.board[0][5]}</td>
              <td>{this.state.game.board[0][6]}</td>
              <td>{this.state.game.board[0][7]}</td>
            </tr>
            <tr>
              <td>{this.state.game.board[1][0]}</td>
              <td>{this.state.game.board[1][1]}</td>
              <td>{this.state.game.board[1][2]}</td>
              <td>{this.state.game.board[1][3]}</td>
              <td>{this.state.game.board[1][4]}</td>
              <td>{this.state.game.board[1][5]}</td>
              <td>{this.state.game.board[1][6]}</td>
              <td>{this.state.game.board[1][7]}</td>
            </tr>
            <tr>
              <td>{this.state.game.board[2][0]}</td>
              <td>{this.state.game.board[2][1]}</td>
              <td>{this.state.game.board[2][2]}</td>
              <td>{this.state.game.board[2][3]}</td>
              <td>{this.state.game.board[2][4]}</td>
              <td>{this.state.game.board[2][5]}</td>
              <td>{this.state.game.board[2][6]}</td>
              <td>{this.state.game.board[2][7]}</td>
            </tr>
            <tr>
              <td>{this.state.game.board[3][0]}</td>
              <td>{this.state.game.board[3][1]}</td>
              <td>{this.state.game.board[3][2]}</td>
              <td>{this.state.game.board[3][3]}</td>
              <td>{this.state.game.board[3][4]}</td>
              <td>{this.state.game.board[3][5]}</td>
              <td>{this.state.game.board[3][6]}</td>
              <td>{this.state.game.board[3][7]}</td>
            </tr>
            <tr>
              <td>{this.state.game.board[4][0]}</td>
              <td>{this.state.game.board[4][1]}</td>
              <td>{this.state.game.board[4][2]}</td>
              <td>{this.state.game.board[4][3]}</td>
              <td>{this.state.game.board[4][4]}</td>
              <td>{this.state.game.board[4][5]}</td>
              <td>{this.state.game.board[4][6]}</td>
              <td>{this.state.game.board[4][7]}</td>
            </tr>
            <tr>
              <td>{this.state.game.board[5][0]}</td>
              <td>{this.state.game.board[5][1]}</td>
              <td>{this.state.game.board[5][2]}</td>
              <td>{this.state.game.board[5][3]}</td>
              <td>{this.state.game.board[5][4]}</td>
              <td>{this.state.game.board[5][5]}</td>
              <td>{this.state.game.board[5][6]}</td>
              <td>{this.state.game.board[5][7]}</td>
            </tr>
            <tr>
              <td>{this.state.game.board[6][0]}</td>
              <td>{this.state.game.board[6][1]}</td>
              <td>{this.state.game.board[6][2]}</td>
              <td>{this.state.game.board[6][3]}</td>
              <td>{this.state.game.board[6][4]}</td>
              <td>{this.state.game.board[6][5]}</td>
              <td>{this.state.game.board[6][6]}</td>
              <td>{this.state.game.board[6][7]}</td>
            </tr>
            <tr>
              <td>{this.state.game.board[7][0]}</td>
              <td>{this.state.game.board[7][1]}</td>
              <td>{this.state.game.board[7][2]}</td>
              <td>{this.state.game.board[7][3]}</td>
              <td>{this.state.game.board[7][4]}</td>
              <td>{this.state.game.board[7][5]}</td>
              <td>{this.state.game.board[7][6]}</td>
              <td>{this.state.game.board[7][7]}</td>
            </tr>
            <tr>
              <td className="header" colSpan="8">
                {this.minesText()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default App
