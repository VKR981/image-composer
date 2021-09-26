import { useEffect, useState } from "react";
import "./App.css";
import { PngFileInput } from "./components/PngFileInput";
import { Preview } from "./components/Preview";
import { Button } from "./components/Button";
import { ReactComponent as downloadIcon } from "./assets/download.svg";
import { mergeImages } from "./utils/mergeImages";
import { BackgroundImages } from "./components/BackgroundImages";
import { BlurControls } from "./components/BlurControls";

function App() {
  const [foregroundImage, setForegroundImage] = useState<File | string | null>(
    "/assets/jeep_car.png"
  );
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState<
    File | string
  >();
  const [blur, setBlur] = useState(0);
  const [outputImage, setOutputImage] = useState<string>();
  const [isComposingImage, setIsComposingImage] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const getUrl = (image: File | string) =>
          typeof image === "string" ? image : URL.createObjectURL(image);

        if (!selectedBackgroundImage && foregroundImage) {
          setOutputImage(getUrl(foregroundImage));
          return;
        }
        if (!foregroundImage && selectedBackgroundImage) {
          setOutputImage(getUrl(selectedBackgroundImage));
          return;
        }

        if (!foregroundImage) return;
        if (!selectedBackgroundImage) return;

        setIsComposingImage(true);

        const output = await mergeImages(
          getUrl(selectedBackgroundImage),
          getUrl(foregroundImage),
          { blur, quality: 0.8, format: "image/png" }
        );

        const res = await fetch(output);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        setOutputImage(url);
      } catch (error) {
        console.error(error);
      } finally {
        setIsComposingImage(false);
      }
    })();
  }, [blur, foregroundImage, selectedBackgroundImage]);

  const handleForegroundFileInput = (files: FileList) => {
    files.item(0) && setForegroundImage(files.item(0));
  };

  return (
    <div className="flex w-full h-screen ">
      <BackgroundImages
        setSelectedBackgroundImage={setSelectedBackgroundImage}
      />
      <div className=" w-2/3 flex justify-center items-center flex-col">
        <BlurControls setBlur={setBlur} />
        <Preview imgUrl={outputImage} isComposingImage={isComposingImage} />

        <div className="flex w-full justify-center mt-4">
          <PngFileInput onChange={handleForegroundFileInput} />
          <Button
            color="secondary"
            text="Download"
            Icon={downloadIcon}
            onClick={() => window.open(outputImage)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
