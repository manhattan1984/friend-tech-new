// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 131 131"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"currentColor"} d={"M0 0h131v131H0z"}></path>

      <defs>
        <pattern
          id={"jgyZ9iknka"}
          patternContentUnits={"objectBoundingBox"}
          width={"1"}
          height={"1"}
        >
          <use xlinkHref={"#jgyZ9iknkb"} transform={"scale(.00052)"}></use>
        </pattern>

        <image
          id={"jgyZ9iknkb"}
          width={"1920"}
          height={"1920"}
          xlinkHref={
          }
        ></image>
      </defs>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */