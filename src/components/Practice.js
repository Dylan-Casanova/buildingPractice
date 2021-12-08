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
// Code for hackerearth practice test.
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
main(stdin_input);
});

function main(input) {
if (input.length === 0) return 0;
var data = input.split('\n');
var firstNumber = data[0]
var secondNumber = (data[1].split(" "));
let closest = secondNumber[0];
for(let i = 0; i < secondNumber.length;i++){
let number = secondNumber[i];
let absNumber = Math.abs(number);
let absClosest = Math.abs(closest);

if (absNumber < absClosest)
{
closest = number;
}
else if (absNumber === absClosest && closest < 0)
{
closest = number;
}
}
str = closest.toString();

process.stdout.write(closest); // Writing output to STDOUT
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