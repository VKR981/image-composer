import React, { MouseEventHandler } from "react";

type Props = {
  text: string;
  color: "primary" | "secondary" | "tertiary";
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  onClick: MouseEventHandler<HTMLButtonElement> &
    MouseEventHandler<HTMLLabelElement>;
  as?: "button" | "label";
  htmlFor?: string;
};

const colors = {
  primary: "#DC2626",
  secondary: "#111827",
  tertiary: "red",
};

export const Button = ({ text, color, Icon, onClick, as, ...props }: Props) => {
  const Element = as || "button";

  return (
    <div>
      <Element
        style={{
          backgroundColor: colors[color],
        }}
        htmlFor={props.htmlFor}
        {...props}
        onClick={onClick}
        className={` bg-${colors[color]} m-4 cursor-pointer text-white text-lg font-bold flex items-center px-6 py-3 rounded-lg`}
      >
        {Icon && (
          <Icon className="w-4 h-4 object-contain mr-2 stroke-current text-white" />
        )}{" "}
        {text}
      </Element>
    </div>
  );
};
