import React from "react";
import { useForm } from "react-hook-form";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("form data", data);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label>First Name</label>
          <input
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <button type="submit">Register</button>
      </form>

      <button onClick={() => setFocus("firstName")}>Focus First Name</button>
    </div>
  );
}

export default RegistrationForm;
