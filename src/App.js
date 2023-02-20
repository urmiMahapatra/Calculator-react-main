// import logo from './logo.svg';
import './App.css';
import Label from './Label';
import Button from './Button';
import Button0 from './Button0';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1 className="Title">CALCULATOR</h1>
        <Label />
        <div className="Grid">
          <Button name = "AC" />
          <Button name = "+/-" />
          <Button name = "%" />
          <Button name = "/" />
          <Button name = "7" />
          <Button name = "8" />
          <Button name = "9" />
          <Button name = "*" />
          <Button name = "4" />
          <Button name = "5" />
          <Button name = "6" />
          <Button name = "-" />
          <Button name = "1" />
          <Button name = "2" />
          <Button name = "3" />
          <Button name = "+" />
          <Button0 name = "0" />
          <Button name = "." />
          <Button name = "=" />
        </div>
      </div>
    </div>
  );
}

export default App;
