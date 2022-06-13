import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export function Button({ ...others }: ButtonProps) {
  return <button {...others} />;
}
