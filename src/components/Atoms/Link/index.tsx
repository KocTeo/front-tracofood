import React from "react";
import { LinkStyle } from './style'


type LinkProps = {
  path: string;
  name: string;
}

export const Link: React.FC<LinkProps> = ({ path, name }) => {
  return (
    <LinkStyle href={path}>{name}</LinkStyle>
  )
}