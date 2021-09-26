import React, { useRef } from "react";
import { Button } from "./Button";

type Props = {
  setBlur: (value: number) => void;
};

export const BlurControls = ({ setBlur }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center">
      <h3 className="font-bold text-xl">Background Blur:</h3>
      <input
        defaultValue="0"
        ref={inputRef}
        className="border text-xl px-4 py-2 rounded-lg ml-4"
        type="number"
      />
      <Button
        text="Apply Blur"
        color="secondary"
        onClick={() => {
          const blur = parseFloat(inputRef.current?.value || "0");
          if (blur > 1 || blur < 0) {
            alert("Please enter a value between 0 and 1");
            return;
          }
          setBlur(blur);
        }}
      />
    </div>
  );
};
