import Link from "next/link";
import { styled } from "styled-components";

export const LinkStyle = styled(Link)`
  font-size: ${props => props.theme.font.size.sm};
`