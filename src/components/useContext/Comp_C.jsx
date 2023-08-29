import React, { useContext } from "react";
import { ThemeContext } from "./UseContext";
export default function Comp_C() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <h1 className={theme}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        veniam veritatis enim quam iure quod nostrum recusandae aspernatur nihil
        sequi. Qui quis amet provident perferendis itaque beatae quas, ut
        incidunt.
      </h1>
    </>
  );
}
