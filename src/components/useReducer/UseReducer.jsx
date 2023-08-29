import React, { useReducer, useState } from "react";
//useState
//+ khai báo giá trị khởi tạo
//+ Bắt sự kiện sử lý

// useReducer
// khai báo giá trị khởi tạo
// Bắn sự kiện tăng giảm và sử lí
// tạo reducer sử lí logic
// Truyền dispath

// b1: khai báo giá trị khởi tạo
const initialValue = 0;
//b2: tạo các hành động
const COUNT_UP = "up";
const COUNT_DOWN = "down";
//   const [count, setCount] = useState(0);
/**
 * Hàm reducer
 * @param {*} state state hiện tại
 * @param {*} action Hành động hiện tại
 */

export default function UseReducer() {
  //b3: Tạo hàm reducer = useReducer()
  const reducer = (state, action) => {
    switch (action) {
      case COUNT_UP:
        return state + 1;
      case COUNT_DOWN:
        return state - 1;
      default:
        return state;
    }
  };
  // b4: gọi ra useReducer(reducer,initialValue)
  const [state, dispath] = useReducer(reducer, initialValue);
  return (
    <>
      <div>
        <button onClick={() => dispath(COUNT_UP)}>Tăng</button>
        <h1 style={{ color: "red" }}>{state}</h1>
        <button onClick={() => dispath(COUNT_DOWN)}>Giảm</button>
      </div>
    </>
  );
}
