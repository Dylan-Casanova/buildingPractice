import React, { Component} from "react";
import "./Practice.css"

class Practice extends React.Component {
  state = {
    activeIndex: null
  }

  handleClick = (index) => this.setState({ activeIndex: index })

  render() {
    return <div>
      <MyClickable name="a" index={0} isActive={ this.state.activeIndex===0 } onClick={ this.handleClick } />
      <MyClickable name="b" index={1} isActive={ this.state.activeIndex===1 } onClick={ this.handleClick }/>
      <MyClickable name="c" index={2} isActive={ this.state.activeIndex===2 } onClick={ this.handleClick }/>
    </div>
  }
}
// practice from hacker rank.
function diagonalDifference(arr) {
  // Initialize sums of diagonals
      var n = arr.length;
      var d1 = 0;
      var d2 = 0;
   
      for (var i = 0; i<n; i++)
      {
          for (var j = 0; j<n; j++)
          {
              // finding sum of primary diagonal
              if (i === j)
                  d1 += arr[i][j];
   
              // finding sum of secondary diagonal
              if (i + j === n - 1)
                  d2 += arr[i][j];
          }
      }
   
      // Absolute difference of the sums
      // across the diagonals
      return Math.abs(d1 - d2);
  }




class MyClickable extends React.Component {
  handleClick = () => this.props.onClick(this.props.index)
  
  render() {
    return <button
      type='button'
      className={
        this.props.isActive ? 'active' : 'album'
      }
      onClick={ this.handleClick }
    >
      <span>{ this.props.name }</span>
    </button>
  }
}
export default Practice;