import React, { useState } from "react";
import QrReader from "react-qr-reader";
import "./App.css";
import Rating from "./Rating";

function App() {
  const [result, setResult] = useState("");
  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };
  return (
    <div className="App">
      <header>DESTINY</header>
      <QrReader
        delay={300}
        // onError={this.handleError}
        onScan={handleScan}
        style={{ width: "50vh", paddingTop: "10vh" }}
      />
      {!!result && <Rating value={result} />}
    </div>
  );
}

export default App;
