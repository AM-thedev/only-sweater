import styled from "styled-components";
import {
  border,
  BorderProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";

export const Image = styled.img<SpaceProps & BorderProps & LayoutProps>`
  ${space}
  ${border}
  ${layout}
`;

Image.defaultProps = {
  display: "block",
};
