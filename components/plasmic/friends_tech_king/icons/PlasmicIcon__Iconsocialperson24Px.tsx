// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Iconsocialperson24PxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Iconsocialperson24PxIcon(props: Iconsocialperson24PxIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
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
          "M17.143 8.571a4.285 4.285 0 01-4.286 4.286 4.284 4.284 0 01-4.286-4.286 4.285 4.285 0 014.286-4.285 4.285 4.285 0 014.286 4.285zM4.286 19.286c0-2.85 5.71-4.286 8.571-4.286 2.86 0 8.572 1.436 8.572 4.286v1.071c0 .59-.483 1.072-1.072 1.072h-15c-.59 0-1.071-.483-1.071-1.072v-1.071z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Iconsocialperson24PxIcon;
/* prettier-ignore-end */
