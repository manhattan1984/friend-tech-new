// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      version={"1.1"}
      shapeRendering={"geometricPrecision"}
      textRendering={"geometricPrecision"}
      imageRendering={"optimizeQuality"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      viewBox={"0 0 784.37 1277.39"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fillRule={"nonzero"}>
        <path
          fill={"#343434"}
          d={"M392.07 0l-8.57 29.11v844.63l8.57 8.55 392.06-231.75z"}
        ></path>

        <path
          fill={"#8C8C8C"}
          d={"M392.07 0L0 650.54l392.07 231.75V472.33z"}
        ></path>

        <path
          fill={"#3C3C3B"}
          d={"M392.07 956.52l-4.83 5.89v300.87l4.83 14.1 392.3-552.49z"}
        ></path>

        <path fill={"#8C8C8C"} d={"M392.07 1277.38V956.52L0 724.89z"}></path>

        <path
          fill={"#141414"}
          d={"M392.07 882.29l392.06-231.75-392.06-178.21z"}
        ></path>

        <path fill={"#393939"} d={"M0 650.54l392.07 231.75V472.33z"}></path>
      </g>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
