import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import auth from "../../firebase.config";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("data:", email, password);

    // craate user
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-auto md:w-1/2">
      <h2 className="text-3xl">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input
          className="py-2 px-5 m-4 rounded w-full text-white font-semibold  shadow-md "
          type="text"
          name="email"
          id="text"
          placeholder="Your Name"
        />{" "}
        <br />
        <input
          className="py-2 px-5 m-4 rounded w-full text-white font-semibold  shadow-md "
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />{" "}
        <br />
        <input
          className="py-2 px-5 bg-violet-500 text-white font-semibold rounded shadow-md hover:bg-violet-700  w-full focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 m-4"
          type="submit"
          value="Regsiter"
        />
      </form>
    </div>
  );
};

export default Register;
