import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase.config";

const HeroRegister = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (password.length < 6) {
      setRegisterError("Password should be at leat 6 Charecters or Longer");
      return;
    }
    // reset
    setRegisterError("");
    setRegisterSuccess("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        setRegisterSuccess("User Created Sucessfully");
      })
      .catch((err) => {
        console.log(err);
        setRegisterError(err.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <label className="label">
                {registerError && (
                  <p className="label-text-alt link link-hover text-red-500">
                    {registerError}
                  </p>
                )}
                {registerSuccess && (
                  <p className="label-text-alt link link-hover text-green-500">
                    {registerSuccess}
                  </p>
                )}
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
