import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

type BoxProps = {
  cursor?: string;
  transition?: string;
};

export const Box = styled.div<
  BoxProps &
    LayoutProps &
    ColorProps &
    PositionProps &
    SpaceProps &
    FlexProps &
    BorderProps &
    FlexboxProps &
    TypographyProps
>(
  ({ cursor, transition, theme }) => ({
    cursor,
    transition,
  }),
  compose(layout, space, color, position, flexbox, flex, border, typography)
);

Box.defaultProps = {
  cursor: "unset",
};
