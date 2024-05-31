import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../contexts/UserContext';

const Form = () => {
  const { setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setUser({ name: data.name });
    console.log(data);
  };

  const email = watch("email");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters"
            },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Name can only contain English letters and spaces"
            }
          })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format"
            }
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmEmail">Confirm Email:</label>
        <input
          id="confirmEmail"
          {...register("confirmEmail", {
            required: "Please confirm your email",
            validate: (value) =>
              value === email || "The emails do not match"
          })}
        />
        {errors.confirmEmail && <p style={{ color: 'red' }}>{errors.confirmEmail.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;