import './App.css';
import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const onChange = event => {
    setValue(event.target.value)
    console.log(value)
  }
  return {value, onChange}
}

const App = () => {
  const name = useInput("Mr.")
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder='Name' {...name} onChange={name.onChange}/>
    </div>
  );
}

export default App;
