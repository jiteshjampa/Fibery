// DataContext.js
import React, { createContext, useState } from "react";

// Create a context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [date, setData] = useState(null);
  const [SelectTime, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [flag, setFlag] = useState(0);
  const [hover, setHover] = useState(0);
  const [displayComponent, setdisplayComponent] = useState(0);
  return (
    <DataContext.Provider
      value={{
        date,
        setData,
        SelectTime,
        setTime,
        name,
        setName,
        setNumber,
        flag,
        setFlag,
        hover,
        setHover,
        email,
        setEmail,
        displayComponent,
        setdisplayComponent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
