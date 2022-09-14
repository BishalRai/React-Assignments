import './App.css';
import { useState } from 'react';

function App() {
  //define state variable
  const [age, setAge] = useState()
  const [heartratelimits, setHeartratelimits] = useState()

  //Defined function to do the calculation and return the value to heartratelimits using setHeartratelimits
  function calculate() {
    const Upper = (220 - age) * 0.85
    const Lower = (220 - age) * 0.65
    setHeartratelimits(<p>{Lower} - {Upper}</p>)
  }

  return (
    <div>
      <h3>Heart Rate Limits Calculator</h3>
      <form>
        <div>
          <label>Age</label>
          <input type="number"
            placeholder="Enter your age here"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Heart Rate Limits</label>
          {/* use the stored value of heartratelimits to display */}
          <output>{heartratelimits}</output> 
        </div>
        <button type="button" onClick={calculate}> CALCULATE </button>
      </form>
    </div>
  );
}
export default App;
