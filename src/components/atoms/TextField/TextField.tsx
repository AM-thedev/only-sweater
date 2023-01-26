import { cloneElement, InputHTMLAttributes, useEffect, useState } from "react";
import { SpaceProps } from "styled-system";
import { colorOptions } from "../../../types";
import { Box } from "../Box";
import { Typography } from "../Typography";
import { SyledTextField, TextFieldWrapper } from "./TextFieldStyle";

export interface TextFieldProps {
  labelColor?: colorOptions;
  label?: string;
  type?: string;
  getValue?: any;  
  errorText?: any;
  id?: any;
  fullwidth?: boolean;
  topAdornment?: any;
  endAdornment?: any;
  startAdornment?: any;
  showLength?: boolean;
  disabled?: boolean;
  placeholder?: string;
  borderRadius?: number;
}

export const TextField: React.FC<
  InputHTMLAttributes<HTMLInputElement> & TextFieldProps & SpaceProps
> = ({ id, label, getValue, errorText, labelColor, topAdornment, endAdornment, startAdornment,showLength, ...props }) => {
  const [textId, setTextId] = useState(id);

  // extract spacing props
  let spacingProps : any = {};
  for (const key in props) {
    if (key.startsWith("m") || key.startsWith("p"))
      spacingProps[key as keyof typeof spacingProps] = props[key as keyof typeof props];
  }

  useEffect(() => {
    if (!id) setTextId(Math.random());
  }, []);

  const [valueLength, setValueLength] = useState(0);

  useEffect(() => {    
    if(showLength && getValue ){
      setValueLength(getValue?.length || 0);
    }
    
  },[showLength, getValue])
  

  return (
    <TextFieldWrapper
      color={labelColor && `${labelColor}.main`}
      fullwidth={props.fullwidth}
      
      {...spacingProps}
    >
      {label && <label htmlFor={textId}>{label}</label>}
      <Box position="relative">
      {topAdornment &&
          cloneElement(topAdornment, {
            className: `top-adornment ${topAdornment.className}`,
          })}
      {startAdornment &&
          cloneElement(startAdornment, {
            className: `start-adornment ${startAdornment.className}`,
          })}

        <SyledTextField id={textId} {...props} />
        {showLength && <Typography fontSize="12px" className="top-adornment">{valueLength}文字</Typography>}
        {endAdornment &&
          cloneElement(endAdornment, {
            className: `end-adornment ${endAdornment.className}`,
          })}
      </Box>
      {errorText && <small>{errorText}</small>}
    </TextFieldWrapper>
  );
};

TextField.defaultProps = {
  color: "default",
  showLength: false
};

