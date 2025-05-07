import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {signIn} = use(AuthContext)

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    // sign in
    signIn(email, password)
    .then(result => {
      const user = result.user
      console.log("welcome to login",user)
    }).catch(error => {
      const errorCode = error.error
      const errorMessage = error.message
      alert(errorMessage)
    })
  }
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-bold text-2xl text-center">Login your account</h2>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="font-bold text-center">
              Don't have an account? Please{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
