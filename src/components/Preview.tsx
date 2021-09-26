import React from "react";

export const Preview = ({
  imgUrl,
  isComposingImage,
}: {
  imgUrl: string | undefined;
  isComposingImage: boolean;
}) => {
  return (
    <div style={{ width: "700px", height: "400px" }} className="bg-gray-200">
      {isComposingImage ? (
        <div className="w-full h-full flex justify-center items-center">
          Image is being composed, please wait...
        </div>
      ) : (
        imgUrl && (
          <img className="w-full h-full object-contain" src={imgUrl} alt="" />
        )
      )}
    </div>
  );
};
