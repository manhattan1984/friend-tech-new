// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CameraIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CameraIcon(props: CameraIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
        d={"M4.513 9.021a4.512 4.512 0 100-9.021 4.512 4.512 0 100 9.021z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CameraIcon;
/* prettier-ignore-end */
