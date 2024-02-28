import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { InputField } from "components/form/fields/InputField";
import { Button } from "components/ui/button/Button";
import { useDispatch } from "react-redux";
import { loginUser } from "api/slice/authSlice/authSlice";
export default function LoginForm() {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data , 'data');
    dispatch(loginUser({data}));
    reset();
  };

  return (
    <div className="flex items-center w-[500px]">
      <div className="w-full">
        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="mb-6 md:w-full">
            <InputField
              name="password"
              type="password"
              className="w-full"
              id="Password"
              placeholder="Password"
              inputType="password"
              label="Password"
              register={register}
            />
            <span className="w-full flex justify-end p-2">
              <a className="text-blue-700 text-center text-sm" href="/login">
                Forgot password?
              </a>
            </span>
          </div>
          <Button type="submit" id="SignIn" name="SignIn" text="Sign In" inputType="submit" />
        </form>
      </div>
    </div>
  );
}
