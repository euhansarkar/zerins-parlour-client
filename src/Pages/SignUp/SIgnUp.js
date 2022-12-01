import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SIgnUp = () => {
  const { handleSubmit, register } = useForm();
  const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleSignUp = (data) => {
    const { email, password } = data;
    console.log(data);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const userInfo = {
          displayName: `${data.fname} ${data.lname}`,
        };

        updateUser(userInfo)
          .then(() => {})
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center my-6 flex-col justify-center">
      <div className="w-[380px] h-[800px]">
        <h2 className="text-center font-bold text-2xl my-4 capitalize">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              {...register("fname")}
              placeholder="Your First Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Last Name</span>
            </label>
            <input
              type="text"
              {...register("lname")}
              placeholder="Your Last Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text capitalize">username or email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Your Username or Email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Confirm Password</span>
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
              already have an account?
              <Link className="text-primary ml-2" to={`/login`}>
                login
              </Link>
            </span>
          </label>
          <input
            type="submit"
            value={`Create An Account`}
            className="btn btn-primary w-full my-6"
          />
        </form>
        <div className="divider">OR</div>
        <div className="space-y-5">
          <button className="btn btn-outline btn-primary w-full">
            {" "}
            <FaFacebook className="text-xl mr-2 text-blue-500" />{" "}
            <span>continue with Facebook</span>
          </button>
          <button onClick={handleSignInWithGoogle} className="btn btn-outline btn-primary w-full">
            {" "}
            <FcGoogle className="text-xl mr-2" />{" "}
            <span>continue with google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SIgnUp;
