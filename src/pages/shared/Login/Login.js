import React from "react";
import useFirebase from "../../../hooks/useFirebase";
import { useForm } from "react-hook-form";
import "./Login.css";
import logo from "../../../Image/logo2.png";

const Login = () => {
  const { signInGoogle, user } = useFirebase();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="login row text-center">
      <div>
        <img className="d-block mx-auto my-5" style={{ width: "250px" }} src={logo} alt="" />
      </div>
      <form className="text-center col-12" onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ width: "350px" }}
          placeholder="Name"
          className="mb-2 form-control  mx-auto input-bg  py-3 border-0"
          defaultValue={user?.displayName}
          {...register("example")}
        />{" "}
        <br />
        <input
          style={{ width: "350px" }}
          placeholder="Email"
          className="mb-2 form-control  mx-auto  input-bg py-3 border-0"
          defaultValue={user?.email}
          {...register("exampleRequired", { required: true })}
        />{" "}
        <br />
        <input
          style={{ width: "350px" }}
          placeholder="Password"
          className="mb-2 form-control  mx-auto  input-bg py-3 border-0"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />{" "}
        <br />
        <input
          style={{ width: "350px" }}
          placeholder="Confirm Password"
          className="mb-2 form-control  mx-auto  input-bg py-3 border-0"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />{" "}
        <br />
        <input style={{ width: "350px" }} className="mb-3 btn btn-danger py-2 fs-5  " type="submit" />
      </form>
      <p className="text-danger fw-bold">already have an account?</p>

      <button onClick={signInGoogle} className="btn btn-outline-success col-md-1 mx-auto col-4">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
