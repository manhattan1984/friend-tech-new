// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SensorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SensorIcon(props: SensorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.708 5.413a2.707 2.707 0 10.001-5.414 2.707 2.707 0 00-.001 5.414z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SensorIcon;
/* prettier-ignore-end */
