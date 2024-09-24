import React, { useEffect, useState } from "react";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [storedData, setStoredData] = useState(); // State to hold retrieved data

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  useEffect(() => {
    const data = localStorage.getItem("user");

    setStoredData(JSON.parse(data));
  }, []);

  return (
    <>
      <h1>Local Storage</h1>
      <input
        type="text"
        placeholder="username.."
        className="form-control"
        name="userName"
        value={userInfo.userName}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="email.."
        className="form-control"
        name="email"
        value={userInfo.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password.."
        className="form-control"
        name="password"
        value={userInfo.password}
        onChange={handleChange}
      />

      <button className="btn btn-info" onClick={handleSubmit}>
        Register
      </button>
      <div>
        <div>
          <h2>Stored User Info:</h2>
          <p>Username: {storedData?.userName}</p>
          <p>Email: {storedData?.email}</p>
          <p>Password: {storedData?.password}</p>
        </div>
      </div>
    </>
  );
};

export default App;
