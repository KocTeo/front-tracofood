import React from "react";
import { IconStyle } from "./style";

type IconProps = {
  path: string;
  alt: string;
  width?: string;
  height?: string;
}

export const Icon: React.FC<IconProps> = ({ alt, path, height, width }) => {
  return (
    <>
      <IconStyle width={width} height={height} alt={alt} src={path} />
    </>
  )
}