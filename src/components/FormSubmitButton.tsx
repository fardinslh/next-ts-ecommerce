"use client";

import { ComponentProps } from "react";
// import { experimental_useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const FormSubmitButton = ({
  children,
  className,
  ...props
}: FormSubmitButtonProps) => {
  // const { pending } = experimental_useFormStatus();
  return (
    <button
      {...props}
      // disabled={}
      type="submit"
      className={`btn btn-primary ${className}`}
    >
      {/* {pending && <span className="loading loading-spinner" />} */}
      {children}
    </button>
  );
};

export default FormSubmitButton;
