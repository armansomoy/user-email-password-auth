import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import auth from "../../firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState("");
  const [loginError, setLoginError] = useState("");
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // add validation

    // reset
    setLoginError("");
    setLoginSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        setLoginSuccess("Login Sucessfully");
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("click", emailRef.current.value);
      return;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      console.log("please write a valid email");
      return;
    }

    // send validations email 
    sendPasswordResetEmail(auth, email)
    .then(() => {console.log('check your email')})
    .catch( err => console.log(err))
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    onClick={handleForgetPassword}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <label className="label text-center" htmlFor="terms">
                <Link
                  to="/heroRegister"
                  className="label-text-alt  link link-hover"
                >
                  Don't have an Account, Please Register
                </Link>
              </label>
              <label className="label">
                {loginSuccess && (
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-green-400"
                  >
                    {loginSuccess}
                  </a>
                )}
                {loginError && (
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-red-400"
                  >
                    {loginError}
                  </a>
                )}
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
