import { create, all } from 'mathjs';
import React, { Component } from 'react';
import './Style.css';

const math = create(all);

class Calci extends Component {
  constructor() {
    super();
    this.state = {
      expression: '',
      displayValue: '0',
    };
  }

  handleButtonClick = (value) => {
    this.setState((prevState) => ({
      expression: prevState.expression + value,
    }));
  };

  handleClear = () => {
    this.setState({
      expression: '',
      displayValue: '0',
    });
  };

  handleBackspace = () => {
    const { expression } = this.state;

    this.setState({
      expression: expression.slice(0, -1),
    });
  };

  handleCalculate = () => {
    try {
      const result = math.evaluate(this.state.expression); // Use math.evaluate for safe expression evaluation
      this.setState({
        displayValue: result.toString(),
      });
    } catch (error) {
      this.setState({
        displayValue: 'Error',
      });
    }
  };

  render() {
    const { displayValue } = this.state;
    const { expression } = this.state;

    return (
      <div>
        <div className="exp">{expression}</div>
        <div className="display">{displayValue}</div>
        <div className="calculator">
          <div className="buttons">
            <div className="rows">
              <button onClick={() => this.handleButtonClick('7')}>7</button>
              <button onClick={() => this.handleButtonClick('8')}>8</button>
              <button onClick={() => this.handleButtonClick('9')}>9</button>
              <button onClick={this.handleBackspace}>←</button>
            </div>
            <div className="rows">
              <button onClick={() => this.handleButtonClick('4')}>4</button>
              <button onClick={() => this.handleButtonClick('5')}>5</button>
              <button onClick={() => this.handleButtonClick('6')}>6</button>
              <button onClick={() => this.handleButtonClick('/')}>/</button>
            </div>
            <div className="rows">
              <button onClick={() => this.handleButtonClick('1')}>1</button>
              <button onClick={() => this.handleButtonClick('2')}>2</button>
              <button onClick={() => this.handleButtonClick('3')}>3</button>
              <button onClick={() => this.handleButtonClick('*')}>x</button>
            </div>
            <div className="rows">
              <button onClick={() => this.handleButtonClick('0')}>0</button>
              <button onClick={() => this.handleButtonClick('.')}>.</button>
              <button onClick={this.handleCalculate}>=</button>
              <button onClick={() => this.handleButtonClick('+')}>+</button>
            </div>
            <div className="text-center rows">
              <button onClick={this.handleClear}>AC</button>
              <button onClick={() => this.handleButtonClick('-')}>-</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calci;