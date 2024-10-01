import { useEffect, useRef, useState } from "react";

function App() {
  const [record, setRecord] = useState([]);
  const intervalRef = useRef();

  const handleClick = (index, val) => {
    if (val != 0 && !record.includes(index)) {
      const newRecord = [...record, index];
      setRecord(newRecord);
    }
  };

  useEffect(() => {
    if (record.length === 0) {
      clearInterval(intervalRef.current);
    } else if (record.length === config.flat(1).filter(val => val === 1).length) {
      intervalRef.current = setInterval(() => {
        setRecord((record) => record.slice(0, record.length - 1));
      }, 300);
    }
  }, [record]);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  return (
    <div className="app">
      <h1>Grid Lights</h1>
      <div className="grid-lights">
        {config.flat(1).map((val, index) => (
          <button
            key={index}
            className={`${val == 0 ? "ignore" : "grid-cell"} ${
              record.includes(index) ? "fill" : ""
            }`}
            onClick={() => handleClick(index, val)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default App;
