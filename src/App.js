import React, {useState, useRef} from 'react';
import './App.css';

//import Form from "./components/Form"
import ApiCall from "./components/ApiCall";

function App() {

  const [form, setForm] = useState({city: ""});
  const cityRef = useRef();

  const enterCity = (e) => {
      e.preventDefault()

      const value = cityRef.current.value
      setForm({...form, city:value})

  }

  return (
    <div className="App">
          <div className="form">
            <form method="POST">
              <label htmlFor="city">Please specify your city</label>
              <input ref={cityRef} type="text" id="city" name="city" onChange={e => enterCity(e)}/>
              <button type="button" id="run">Go!</button>
            </form>
          </div>

            <ApiCall form={form} />
    </div>
  );
}

export default App;
