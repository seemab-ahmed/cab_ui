import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { InputField } from "components/form/fields/InputField";
import { Button } from "components/ui/button/Button";
import { useDispatch } from "react-redux";
import { signupUser } from "api/slice/authSlice/authSlice";
import { useNavigate } from "react-router-dom";
export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data , 'data');
    dispatch(signupUser({data}));
    reset();
    navigate('/user');
  };

  return (
    <div className="flex items-center w-[500px]">
      <div className="w-full">
        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 md:w-full">
            <InputField
              name="firstName"
              type="text"
              className="w-full"
              id="firstName"
              placeholder="First Name"
              inputType="text"
              label="First Name"
              register={register}
            />
          </div>
          <div className="mb-4 md:w-full">
            <InputField
              name="lastName"
              type="text"
              className="w-full"
              id="lastName"
              placeholder="Last Name"
              inputType="text"
              label="lastName"
              register={register}
            />
          </div>
        <div className="mb-4 md:w-full">
            <InputField
              name="email"
              type="email"
              className="w-full"
              id="Email"
              placeholder="Email"
              inputType="email"
              label="Email"
              register={register}
            />
          </div>
          <div className="mb-4 md:w-full">
            <InputField
              name="password"
              type="password"
              className="w-full"
              id="password"
              placeholder="Password"
              inputType="password"
              label="Password"
              register={register}
            />
          </div>
          <div className="mb-4 md:w-full">
            <InputField
              name="confirmPassword"
              type="password"
              className="w-full"
              id="confirmPassword"
              placeholder="confirm Password"
              inputType="password"
              label="confirm Password"
              register={register}
            />
          </div>
          
          <div className="mb-6 md:w-full">
            <InputField
              name="roles"
              type="text"
              className="w-full"
              id="roles"
              placeholder="Role"
              inputType="text"
              label="Role"
              register={register}
            />
            <span className="w-full flex justify-end p-2">
              <a className="text-blue-700 text-center text-sm" href="/login">
                Forgot password?
              </a>
            </span>
          </div>
          <Button type="submit" id="Register" name="register" text="Register" inputType="submit" />
        </form>
      </div>
    </div>
  );
}
