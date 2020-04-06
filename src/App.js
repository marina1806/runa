import React from 'react';
import Checkbox from "./Checkbox";
import './index.css';


export default class App extends React.Component {
  state = {
    checked: false,
    disabled: true,
    hover: false ,
    focused: false,
    pressed: false 
  };

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  toggleHover = () => {
    console.log("hello");
    this.setState({
      hover: !this.state.hover,
    });
  };
  onFocusHandler = () => {
    console.log("hi");
    this.setState({
      focused: !this.state.focused,
    });
  };
  onClickHandler = () => {
    console.log("click");
    this.setState({
      pressed: !this.state.pressed,
    });
  };


  render() {
    const { disabled, checked,} = this.state;

    let checkStyle;
      if (this.state.hover) {
        checkStyle = {backgroundColor: 'blue', cursor: 'pointer'}
      } else if (this.state.focused) {
        checkStyle = {backgroundColor: 'blue',cursor: 'pointer'}
      } else {
        checkStyle ={ backgroundColor: 'blue'}
      }

    return (
      <div className="App">
        <Checkbox
         css={checkStyle}
         checked={checked}
         disabled={disabled}
         onChange={this.handleChange}
         onMouseEnter={this.toggleHover} 
         onMouseLeave={this.toggleHover}
         onFocus={this.onFocusHandler}
         onClick={this.onClickHandler}
         />
      </div>
    );
  }
}

