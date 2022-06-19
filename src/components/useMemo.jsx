import React, { useState, useMemo, useEffect } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    console.log("useMemo");
    return slowFunction(number);
  }, [number]); // if number changes useMemo is called
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  //withous using useMemo in themeStyles,
  //useEffect is called each time the component re-renders,
  //as a new themeStyles object is created each time which is
  //different from the previous one
  //(referential equality)
  useEffect(() => {
    console.log("theme changed");

    // eslint-disable-next-line
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>

      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num) {
  console.log("calling slow function");

  for (let i = 0; i < 1000000000; i++) {}

  return num * 2;
}

export default UseMemo;

//1. if a function is slow, doesn't change much wrap that with useMemo
//2. referential equality
