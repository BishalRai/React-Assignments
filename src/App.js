import './App.css';
import { useState } from 'react';

function App() {
  //define state variable
  const [age, setAge] = useState(0)
  const [heartratelimits, setHeartratelimits] = useState(0)

  function calculate(){
    const Upper = (220 - age ) * 0.85
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
          />
        </div>
        <div>
          <label>Heart Rate Limits</label>
          <output></output>
        </div>

        <button type="button"> calculate </button>

      </form>
    </div>
  );
}

export default App;
