import React, { useState } from "react";
export default function ClickButton() {
  const [count, countUpdate] = useState(0);
  return (
    <>
      <button onClick={() => countUpdate(count + 1)}>Click</button>
      <p>Số lần đã bấm: {count}</p>
    </>
  );
}
