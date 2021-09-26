export const mergeImages = (
  backgroundImageUrl: string,
  forgroundImageUrl: string,
  options: { format: string | undefined; quality: number; blur: number } = {
    format: "image/png",
    quality: 1,
    blur: 0,
  }
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = window.document.createElement("canvas");
    const backgroundImage = new Image();

    backgroundImage.src = backgroundImageUrl;
    backgroundImage.onerror = () => new Error("Couldn't load image");
    backgroundImage.onload = () => {
      canvas.width = backgroundImage.width;
      canvas.height = backgroundImage.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Couldn't get canvas context");
      }

      options.blur = options.blur > 1 || options.blur < 0 ? 0 : options.blur;
      ctx.globalAlpha = 1 - options.blur;

      ctx.drawImage(backgroundImage, 0, 0);
      const forgroundImage = new Image();

      forgroundImage.src = forgroundImageUrl;
      forgroundImage.onerror = () => new Error("Couldn't load image");
      forgroundImage.onload = () => {
        const dx = (backgroundImage.width - forgroundImage.width) / 2;
        const dy = (backgroundImage.height - forgroundImage.height) / 2;
        ctx.globalAlpha = 1;

        ctx.drawImage(forgroundImage, dx, dy);
        resolve(canvas.toDataURL(options.format, options.quality));
      };
    };
  });
};
