import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type Variants = "outline" | "text";
type Sizes = "sm" | "md" | "lg";
type Colors = "default" | "primary" | "secondary" | "danger";

const Button: FunctionComponent<
  {
    children: String | ReactNode;
    variant?: Variants;
    disableShadow?: boolean;
    disabled?: boolean;
    startIcon?: String;
    endIcon?: String;
    size?: Sizes;
    color?: Colors;
  } & React.HTMLAttributes<HTMLButtonElement>
> = ({
  children,
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
  ...props
}) => {
  const classNames = cn({
    [styles.Button]: Button,
    [styles[`Button_variant_${variant}`]]: variant,
    [styles.Button_disableShadow]: disableShadow,
    [styles.Button_disabled]: disabled,
    [styles[`Button_size_${size}`]]: size,
    [styles[`Button_color_${color}`]]: color,
  });

  const isDisabled = disabled ? true : false;

  return (
    <button className={classNames} disabled={isDisabled} {...props}>
      {startIcon && <i className="material-icons start-icon">{startIcon}</i>}
      {children}
      {endIcon && <i className="material-icons end-icon">{endIcon}</i>}
    </button>
  );
};

export default Button;
