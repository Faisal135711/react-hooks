import React, { useCallback, useState } from "react";
import List from "./List";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  /*
    useCallback: getItems will be the function,
                 new instance of getItems will be created 
                 each time component re-renders(without useCallback/useMemo)
                 we can pass arguments when calling the getItems fucntion in List component
                 as useCallback returns the function not the return value, which can't be 
                 done with useMemo
    useMemo: getItems will be the return value of the function

  */
  const getItems = useCallback(
    (add) => {
      return [number + add, number + 1 + add, number + 2 + add];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>

      <List getItems={getItems} />
    </div>
  );
};

export default UseCallback;
