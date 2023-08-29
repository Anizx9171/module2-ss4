import React, { useState } from "react";

export default function DemKiTu() {
  const [arr, setArr] = useState([]);
  const [value, setValue] = useState("");
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setArr(value.split(""))}>Đếm</button>
      <p>Có số kí tự: {arr.length}</p>
    </>
  );
}
