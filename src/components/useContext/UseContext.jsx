import React, { createContext, useState } from "react";
import Comp_A from "./Comp_A";
// comp_A => comp_B => Comp_C
export const ThemeContext = createContext();

export default function UseContext() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <button onClick={changeTheme}>Change Theme</button>
        <Comp_A />
      </ThemeContext.Provider>
    </>
  );
}
