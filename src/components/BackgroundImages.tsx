import React, { useState } from "react";
import FileInput from "./BackgroundFileInput";

type Props = {
  setSelectedBackgroundImage: (file: File | string) => void;
};

export const BackgroundImages = ({ setSelectedBackgroundImage }: Props) => {
  const [backgroundImages, setBackgroundImages] = useState<string[]>([
    "/assets/bg1.jpg",
    "/assets/bg2.jpg",
  ]);

  const handleBackgroundFileInput = (files: FileList) => {
    const arr = Array.from(files);

    const filteredArr = arr.filter((file) => file.type.match(/image.*/));
    if (filteredArr.length === 0) {
      alert("Please select an image file");
      return;
    }
    const urls = filteredArr.map((file) => URL.createObjectURL(file));
    if (backgroundImages.length === 0) {
      setSelectedBackgroundImage(urls[0]);
    }

    setBackgroundImages((prevFiles) => [...prevFiles, ...urls]);
  };

  return (
    <div className=" bg-gray-100 shadow-xl w-2/6 p-4 flex flex-col items-center justify-center">
      <h3 className="font-bold mb-1 text-xl">Backgrounds</h3>
      <div className="flex p-2 mb-2 border-gray-500 border-2 flex-wrap rounded-md justify-center">
        {backgroundImages.map((imageUrl, index) => (
          <img
            onClick={() => setSelectedBackgroundImage(imageUrl)}
            className="w-32 h-20 object-cover m-2"
            alt="uploaded"
            src={imageUrl}
          ></img>
        ))}
      </div>
      <FileInput onChange={handleBackgroundFileInput} />
    </div>
  );
};
