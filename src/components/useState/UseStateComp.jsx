import React, { useState } from "react";
let arr = [100, 200, 300, 400];
export default function UseStateComp() {
  // Đối với initialState là một callback function thì nó sẽ lấy giá trị đc return
  // Phạm vi viết code Js
  const [Count, setCount] = useState(() => {
    let total = arr.reduce((sum, e) => sum + e, 0);
    console.log("Khởi tạo giá trị");
    return total;
  });
  console.log("re - render");
  return (
    <>
      <button onClick={() => setCount(Count + 1)}>count++</button>
      <h1>Count: {Count}</h1>
      <button onClick={() => setCount(Count - 1)}>count--</button>
    </>
  );
}
