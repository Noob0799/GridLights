import { useEffect, useRef, useState } from "react";

function App() {
  const [record, setRecord] = useState([]);
  const intervalRef = useRef();

  const handleClick = (index) => {
    if (index != 4 && !record.includes(index)) {
      const newRecord = [...record, index];
      setRecord(newRecord);
    }
  };

  useEffect(() => {
    if(record.length === 0) {
      clearInterval(intervalRef.current);
    } else if (record.length === 8) {
      intervalRef.current = setInterval(() => {
        setRecord(record => record.slice(0, record.length - 1));
      }, 300);
    }
  }, [record]);

  return (
    <div className="app">
      <h1>Grid Lights</h1>
      <div className="grid-lights">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`${index != 4 ? "grid-cell" : ""} ${record.includes(index) ? "fill" : ""}`}
              onClick={() => handleClick(index)}
            ></div>
          ))}
      </div>
    </div>
  );
}

export default App;
