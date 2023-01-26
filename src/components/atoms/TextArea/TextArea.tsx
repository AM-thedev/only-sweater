import { cloneElement, TextareaHTMLAttributes, useEffect, useState } from "react";
import { BorderProps, SpaceProps } from "styled-system";
import { colorOptions } from "../../../types";
import { Typography } from "../Typography";
import { SyledTextArea, TextAreaWrapper } from "./TextAreaStyle";


export interface TextAreaProps
  extends SpaceProps,
    BorderProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelColor?: colorOptions;
  label?: string;
  getValue?: any;  
  errorText?: any;
  topAdornment?: any;
  id?: any;
  fullwidth?: boolean;
  showLength?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  getValue,  
  errorText,
  labelColor,
  showLength,
  topAdornment,
  ...props
}: TextAreaProps) => {
  // extract spacing props
  let spacingProps :  any = {};
  let otherProps : any = {};

  for (const key in props) {
    if (key.startsWith("m") || key.startsWith("p"))
      spacingProps[key as keyof typeof spacingProps] = props[key as keyof typeof props];
    else otherProps[key as keyof typeof otherProps] = props[key as keyof typeof props];
  }

  const [valueLength, setValueLength] = useState(0);

  useEffect(() => {    
    if(showLength && getValue){
      setValueLength(getValue?.length || 0);
    }
    
  },[showLength, getValue])

  return (
    <TextAreaWrapper
      color={labelColor && `${labelColor}.main`}
      fullwidth={props.fullwidth}
      {...spacingProps}
    >
      {label && <label htmlFor={id}>{label}</label>}
      {topAdornment &&
          cloneElement(topAdornment, {
            className: `top-adornment ${topAdornment.className}`,
          })}
      <SyledTextArea id={id} {...otherProps} />
      {showLength && <Typography fontSize="12px" mt="5px" textAlign="right">{valueLength}文字</Typography>}
      {errorText && <small>{errorText}</small>}
    </TextAreaWrapper>
  );
};

TextArea.defaultProps = {
  id: "textArea",
  color: "default",
  showLength: false
};