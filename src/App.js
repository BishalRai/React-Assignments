import './App.css';
import { useState } from 'react';

function App() {
  //define state variable
  const [age, setAge] = useState(0)
  const [heartratelimits, setHeartratelimits] = useState(0)

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
