import React from 'react';
import './Button.css';

var prevNum = 0;
var currNum = 0;
var currOp = "";
var prevOp = "";
var curSign = 1;
var decDigit = 0.0;
var newSet = true;
var isFloat = false;


class Button extends React.Component {

    constructor(props) {
        super(props);
        this.className = "Button";
        this.ButtonText = props.name;
        this.displayLabel = document.getElementById("Display");
    }

    handleClick() {
        if (this.displayLabel == null) {
            this.displayLabel = document.getElementById("Display");
        }
        this.handleButton();
    }

    handleButton() {
        switch (this.ButtonText) {
            case 'AC':
                this.resetStates();
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.handleNumber(this.ButtonText);
                break;
            case '+/-':
            case '%':
            case '.':
                this.handleUnary(this.ButtonText);
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '=':
                this.handleOperation(this.ButtonText);
                break;
            default:
                break;
        }
    }

    resetStates() {
        prevNum = 0;
        currNum = 0;
        curSign = 1;
        currOp = "";
        prevOp = "";
        decDigit = 0.0;
        newSet = true;
        isFloat = false;
        this.displayText("" + 0);
    }

    handleNumber(ch) {
        let num = parseInt(ch);
        if (newSet === true) {
            currNum = 0;
            newSet = false;
        }

        if (isFloat == true) {
            currNum = currNum + (curSign * num * decDigit);
            decDigit = decDigit * 0.1;
        }
        else {
            currNum = (currNum * 10) + (curSign * num);
        }
        this.displayText("" + currNum);
    }

    handleUnary(ch) {
        if (ch === '+/-') {
            curSign = -1 * curSign;
            currNum = -1 * currNum;
            this.displayText("" + currNum);
            return;
        }
        else if (ch === '.') {
            currNum = (currNum * 1.0);
            isFloat = true;
            decDigit = 0.1;
            this.displayText(currNum + ".0");
            return;
        }
        else if (ch === '%') {

            if (currOp === "") {
                prevNum = this.calc(currOp);
            }
            prevNum = (currNum * 1.0) / 100;
            currNum = 0
            this.displayText("" + prevNum);
            return;
        }
    }

    handleOperation(ch) {
        prevOp = currOp;
        currOp = ch;

        if (prevOp === "") {
            prevNum = currNum;
            currNum = 0;
            decDigit = 0.0;
            isFloat = false;
            this.displayText("" + prevNum);
        }
        else if (currOp === '=') {
            prevNum = this.calc(prevOp);
            currNum = 0;
            this.displayText("" + prevNum);
        }
        else {
            prevNum = this.calc(prevOp);
            currNum = 0;
            this.displayText("" + prevNum);
        }
        newSet = true;
    }

    calc(opr) {
        switch (opr) {
            case '+':
                return (prevNum + currNum);
            case '-':
                return (prevNum - currNum);
            case '*':
                return (prevNum * currNum);
            case '/':
                return (prevNum / currNum);
            default:
                return prevNum;
        }
    }



    displayText(text) {
        this.displayLabel.innerHTML = text;
    }

    clearDisplay() {
        this.displayLabel.innerHTML = "";
    }

    render() {
        return (
            <div className="Button" onClick={() => this.handleClick()}>{this.ButtonText}</div>
        );
    }
}

export default Button;
