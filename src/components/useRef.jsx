import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const count = useRef(1);
  const inputRef = useRef();
  const prevVal = useRef();

  useEffect(() => {
    count.current += 1;
    console.log(count);
  });

  function focus() {
    inputRef.current.focus();
  }

  useEffect(() => {
    // if prevVal is useState, then it will cause the component to re-render
    prevVal.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>
        Name: {name} and prevName is {prevVal.current}
      </div>
      <div>I rendered {count.current} times</div>

      <button onClick={focus}>Focus</button>
    </>
  );
};

export default UseRef;

// useRef doesn't re-render component like useState, presists values between renders
// useRef to access dom elements
// useRef to store previous value of state
