import React from "react";
import { ReactComponent as UploadIcon } from "../assets/upload.svg";
import { Button } from "./Button";

interface Props {
  onChange: (files: FileList) => void;
}

export const PngFileInput = ({ onChange }: Props) => {
  return (
    <div>
      <Button
        htmlFor="png-file-upload"
        as="label"
        text="Upload png"
        color="primary"
        onClick={() => null}
        Icon={UploadIcon}
      />{" "}
      <input
        style={{ display: "none" }}
        id="png-file-upload"
        type="file"
        className="sr-only"
        onChange={(e) => {
          e.target.files && onChange(e.target.files);
        }}
      />
    </div>
  );
};
