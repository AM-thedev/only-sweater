import systemCss from "@styled-system/css";
import styled from "styled-components";
import { colorOptions } from "../../../types";
import {
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  layout,
  space,
  SpaceProps,
  size,
  SizeProps
} from "styled-system";

interface DotProps {
  size?: string;
  color?: colorOptions;
}

export const Dot = styled.span<
  ColorProps | BackgroundProps | BorderProps | SpaceProps | SizeProps | DotProps
>(  
  ({ color, theme }) =>
  systemCss({
    height: size,
    width: size,
    borderWidth: "1px",
    borderColor: theme.colors.gray[400],
    borderStyle: "solid",
    borderRadius: "50%",
    display: "inline-block",
    backgroundColor: color
  }),
  compose(color, layout, space, border)
);

Dot.defaultProps = {
  size: "1vw",
  color: "grey",
};
