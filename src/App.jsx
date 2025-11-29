// src/App.jsx
import { useState, useRef } from "react";
import "./App.css";

export default function App() {
  // ------------------ CONTROLLED STATES ------------------
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cSubscribe, setCSubscribe] = useState(false);
  const [cFav, setCFav] = useState("react");
  const [cResult, setCResult] = useState(null);

  // ------------------ UNCONTROLLED REFS ------------------
  const uName = useRef();
  const uEmail = useRef();
  const uSub = useRef();
  const uFav = useRef();
  const [uResult, setUResult] = useState(null);

  return (
    <div className="container">
      <h1>Controlled & Uncontrolled Components</h1>

      {/* ---------------- CONTROLLED FORM ---------------- */}
      <div className="box">
        <h2>Controlled Form</h2>

        <label>
          Name:
          <input
            value={cName}
            onChange={(e) => setCName(e.target.value)}
            placeholder="Enter name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={cEmail}
            onChange={(e) => setCEmail(e.target.value)}
            placeholder="Enter email"
          />
        </label>

        <label className="row">
          <input
            type="checkbox"
            checked={cSubscribe}
            onChange={(e) => setCSubscribe(e.target.checked)}
          />
          Subscribe
        </label>

        <label>
          Favorite Framework:
          <select value={cFav} onChange={(e) => setCFav(e.target.value)}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
          </select>
        </label>

        <button
          onClick={() =>
            setCResult({
              name: cName,
              email: cEmail,
              subscribe: cSubscribe,
              favorite: cFav,
            })
          }
        >
          Submit
        </button>

        {cResult && (
          <pre className="output">{JSON.stringify(cResult, null, 2)}</pre>
        )}
      </div>

      {/* ---------------- UNCONTROLLED FORM ---------------- */}
      <div className="box">
        <h2>Uncontrolled Form</h2>

        <label>
          Name:
          <input ref={uName} placeholder="Enter name" />
        </label>

        <label>
          Email:
          <input ref={uEmail} placeholder="Enter email" type="email" />
        </label>

        <label className="row">
          <input type="checkbox" ref={uSub} />
          Subscribe
        </label>

        <label>
          Favorite Framework:
          <select ref={uFav} defaultValue="react">
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
          </select>
        </label>

        <button
          onClick={() =>
            setUResult({
              name: uName.current.value,
              email: uEmail.current.value,
              subscribe: uSub.current.checked,
              favorite: uFav.current.value,
            })
          }
        >
          Read Values
        </button>

        {uResult && (
          <pre className="output">{JSON.stringify(uResult, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}