import React from 'react';
import {Button as CustomButton} from "./style";
import {StyledButtonProps} from "./types";

const Button = ({appearance = 'primary', dimension = 'm', children, ...props}: StyledButtonProps) => {
  return (
    <CustomButton appearance={appearance} {...props} >
      {children}
    </CustomButton>
  );
};

export default Button;
