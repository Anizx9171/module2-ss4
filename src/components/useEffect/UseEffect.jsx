import React, { useEffect, useState } from "react";

export default function UseEffect() {
  // Cách 1: useEffect(callback)
  // + Call back đc gọi khi component đc mounted
  // + call back đc gọi khi component đc gắn vào DOM
  // + call back đc gọi khi state thay đổi
  //=> ít dùng
  // Cách 2: useEffect(callback, [])
  // + Call back đc gọi khi component đc mounted
  // + call back chỉ được gọi 1 lần khi render lần đầu <=> componentDidMounted trong lifecycle
  // Cách 3: useEffect(callback, [deps])
  // + Call back đc gọi khi component đc mounted
  // + call back đc gọi khi  dependency(Điều kiện) bị thay đổi
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //Cách 1:
  //   useEffect(() => {
  //     // Thay đổi tiêu đề tren tab
  //     document.title = name;
  //     console.log("useEffect dc gọi");
  //   });

  //Cách 2:
  //   useEffect(() => {
  //     //Phù hợp cho việc gọi API để hiển thị thông tin
  //     console.log("useEffect dc gọi");
  //   }, []);
  useEffect(() => {
    console.log("useEffect dc gọi");
  }, [email]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
    };
    let users = JSON.parse(localStorage.getItem("users"));
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(newUser);
  };
  return (
    <>
      {console.log("render")}
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
