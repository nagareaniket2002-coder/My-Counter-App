import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px",
      fontFamily: "Arial",
      background: "linear-gradient(to right, #74ebd5, #ACB6E5)",
      height: "100vh",
      paddingTop: "50px"
    }}>
      
      <h1 style={{
        color: counter % 2 === 0 ? "green" : "red",
        fontSize: "50px",
        transition: "0.3s"
      }}>
        Counter: {counter}
      </h1>

      <button 
        onClick={() => setCounter(counter + 1)}
        style={btnStyle("green")}
      >
        ➕ Increase
      </button>

      
      <button 
        onClick={() => setCounter(counter - 1)}
        style={btnStyle("purple")}
      >
        ➖ Decrease
      </button>

    
      <br /><br />
      <button 
        onClick={resetCounter}
        style={btnStyle("gray")}
      >
        🔄 Reset
      </button>

    </div>
  );
}


const btnStyle = (color) => ({
  padding: "12px 25px",
  fontSize: "18px",
  backgroundColor: color,
  color: "white",
  border: "none",
  borderRadius: "10px",
  margin: "10px",
  cursor: "pointer",
  transition: "0.3s",
});

export default App;