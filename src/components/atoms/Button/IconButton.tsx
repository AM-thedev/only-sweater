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
  shadow,
  space,
  SpaceProps,
  variant,
} from "styled-system";

interface IconButtonProps {
  size: "small" | "medium" | "large" | "none";
  variant: "text" | "outlined" | "contained";
  color?: colorOptions;
}

export const IconButton = styled.button<
  ColorProps | BackgroundProps | BorderProps | SpaceProps | IconButtonProps
>(  
  systemCss({
    outline: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: 3,
    padding: "1rem",
    fontWeight: 600,
    color: "inherit",
    transition: "all 150ms ease-in-out",
    bg: "body.paper",
    "&:hover": {
      bg: "gray.200",
    },
    "&:disabled": {
      bg: "text.disabled",
      color: "text.muted",
    },
  }),
  ({color}) =>
    variant({
      prop: "variant",
      variants: {
        text: {
          border: "none",
          color: `${color}.main`,
        },
        outlined: {
          color: `${color}.main`,
          border: "1.5px solid",
          borderColor: `${color}.main`,                    
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${color}.main`,
          },
        },
        contained: {
          border: "1.5px solid",
          borderColor: `${color}.main`,
          color: `${color}.text`,
          bg: `${color}.main`,
          "&:hover": {
            bg: `${color}.main`,
          },
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${color}.main`,
          },
        },
      },
    }),
  variant({
    prop: "size",
    variants: {
      large: {
        padding: "1.25rem",
      },
      medium: {
        padding: "1rem",
      },
      small: {
        padding: "0.75rem",
        fontSize: 14,
      },
    },
  }),
  compose(color, layout, space, border, shadow)
);

IconButton.defaultProps = {
  size: "small",
};

