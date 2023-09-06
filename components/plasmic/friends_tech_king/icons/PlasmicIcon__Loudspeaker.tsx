// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LoudspeakerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LoudspeakerIcon(props: LoudspeakerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 4"}
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
          "M1.805 0h30.237a1.805 1.805 0 110 3.608H1.805a1.805 1.805 0 110-3.608"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LoudspeakerIcon;
/* prettier-ignore-end */
