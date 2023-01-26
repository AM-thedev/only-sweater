import systemCss from "@styled-system/css";
import { colorOptions } from "../../../types";
import styled from "styled-components";
import {
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  shadow,
  space,
  SpaceProps,
  variant,
} from "styled-system";

interface ButtonProps {
  size?: "desktop" | "mobile" | "none";
  color?: colorOptions;
  variant?: "menu" | "redirect" | "form";
  fullwidth?: boolean;
}

export const Button = styled.button<
  ColorProps &
    BackgroundProps &
    BorderProps &
    SpaceProps &
    ButtonProps &
    LayoutProps
>(
  
  ({ color, fullwidth }) =>
    systemCss({
      display: "flex",
      width: fullwidth ? "100%" : "unset",
      justifyContent: "center",
      alignItems: "center",
      outline: "none",
      border: "none",
      cursor: "pointer",
      padding: "12px 1.5rem",
      fontSize: 18,
      fontWeight: 400,
      color: color ? `${color}.main` : "body.text",
      background: "transparent",
      transition: "all 150ms ease-in-out",
      lineHeight: 1,
    }),
  ({ theme, color = '#000' }) =>
    variant({
      prop: "variant",
      variants: {

        menu: {
          fontFamily: "Baskerville",
          border: "none",
          color: `${color}.main`,
        },

        redirect: {
          fontFamily: "Baskerville",
          padding: "10px 16px",
          color: `${color}.main`,
          borderBottom: "1px solid",
          borderColor: color ? `${color}.main` : "text.disabled",
        },

        form: {
          fontFamily: "Noto Serif JP",
          border: "none",
          color: '#FFFFFF',//`${color}.text`,
          bg: '#F5B05F', //`${color}.main`,
          borderRadius: 5,
          padding: "16px 3rem",
        },
      },
    }),
    
  variant({
    prop: "size",
    variants: {
      desktop: {
        fontSize: "18px",
      },
      mobile: {
        fontSize: "16px",
      },
    },
  }),
  compose(color, layout, space, border, shadow)
);

Button.defaultProps = {
  size: "desktop",
};