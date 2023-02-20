import Button from './Button.js'
import './Button.css';

class Button0 extends Button {
    constructor(props) {
        super(props);
        this.className="Button0";
    }

    render() { 
        return (
          <div className="Button0" onClick={() => this.handleClick()}>{this.ButtonText}</div>
        );
    }
}

export default Button0;
