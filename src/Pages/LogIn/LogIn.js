import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
const LogIn = () => {
  const { handleSubmit, register } = useForm();
  const { logIn, signInWithGoogle } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleLogIn = (data) => {
    const { email, password } = data;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(err => {
      console.error(err);
    })
  }

  return (
    <div className="flex items-center flex-col justify-center">
      <div className="w-32 mt-5">
        <img src={logo} alt="" />
      </div>
      <div className="w-[380px] h-[600px]">
        <h2 className="text-center font-bold text-2xl my-4 capitalize">
          login
        </h2>
        <form onSubmit={handleSubmit(handleLogIn)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              {...register("email")}
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>
          <label className="label">
            <span className="label-text">
              new to <span className="font-bold">zerins parlour</span> ?{" "}
              <Link className="text-primary" to={`/signup`}>
                create a new account.
              </Link>
            </span>
          </label>
          <input type="submit" className="btn btn-primary w-full my-6" />
        </form>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full">
          {" "}
          <FcGoogle className="text-xl mr-2" />{" "}
          <span>continue with google</span>
        </button>
      </div>
    </div>
  );
};

export default LogIn;
