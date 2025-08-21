import React, { useState } from "react";

const BlurImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`
        w-full h-full object-cover object-top transform transition-all duration-700 ease-in-out
        ${loaded ? "blur-0 scale-100 opacity-100" : "blur-lg scale-105 opacity-60"}
        ${className}
      `}
    />
  );
};

export default BlurImage;
