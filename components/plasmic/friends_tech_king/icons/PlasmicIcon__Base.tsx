// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BaseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BaseIcon(props: BaseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 281 576"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 40.596C0 18.176 18.185 0 40.616 0h198.801c22.432 0 40.617 18.175 40.617 40.596v494.808c0 22.42-18.185 40.596-40.617 40.596h-198.8C18.184 576 0 557.825 0 535.404V40.596z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BaseIcon;
/* prettier-ignore-end */
