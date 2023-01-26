import systemCss from "@styled-system/css";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import {
  border,
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
} from "styled-system";

interface Props extends SpaceProps, ColorProps {
  fullwidth?: boolean;
}

export const SyledTextArea = styled.textarea<
  InputHTMLAttributes<HTMLInputElement> & Props
>(
  (props) =>
    systemCss({
      display: "block",
      padding: "8px 12px",
      minHeight: "100px",
      fontSize: "inherit",
      color: "body.text",
      borderRadius: 5,
      border: "1px solid",
      borderColor: "gray.510",
      width: props.fullwidth ? "100%" : "inherit",
      outline: "none",
      overflow: "auto",
      fontFamily: "inherit",
      resize: "vertical",
      "&:hover": {
        borderColor: "gray.500",
      },
      "&:focus": {
        outlineColor: "primary.main",
        borderColor: "primary.main",
      },
    }),
  compose(color, border)
);

export const TextAreaWrapper = styled.div<Props>(
  (props) =>
    systemCss({
      position: "relative",
      width: props.fullwidth ? "100%" : "inherit",

      "& label": {
        display: "block",
        marginBottom: "0.5rem",
        fontSize: "0.875rem",
        color: "text.primary",
      },

      "& small": {
        display: "block",
        color: "error.main",
        marginTop: "0.25rem",
        marginLeft: "0.25rem",
      },

      ".top-adornment": {
        top: "0",
        transform: "translateY(-50%)",
        left: "0.5rem",
      },
    }),
  compose(color, space)
);