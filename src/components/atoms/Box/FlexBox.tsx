import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import { Box } from "./Box";

export const FlexBox = styled(Box)<
  FlexboxProps & LayoutProps & SpaceProps & ColorProps & BorderProps
>`
  display: flex;

  ${layout}
  ${color}
  ${flexbox}
  ${space}
  ${border}
`;