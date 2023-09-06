// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TikTokOriginalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TikTokOriginalIcon(props: TikTokOriginalIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.314 7.22a7.802 7.802 0 004.563 1.465V5.4c-.322 0-.643-.034-.958-.1v2.586a7.803 7.803 0 01-4.564-1.465v6.706c0 3.354-2.71 6.074-6.052 6.074a6.009 6.009 0 01-3.37-1.027A6.024 6.024 0 008.261 20c3.343 0 6.053-2.72 6.053-6.074V7.22zm1.182-3.316a4.587 4.587 0 01-1.182-2.681V.8h-.908a4.601 4.601 0 002.09 3.104zM6.048 15.598a2.774 2.774 0 01-.565-1.682 2.774 2.774 0 013.608-2.648v-3.36a6.085 6.085 0 00-.958-.055v2.615a2.774 2.774 0 00-3.609 2.648 2.78 2.78 0 001.524 2.482z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.355 6.42a7.803 7.803 0 004.564 1.465V5.298a4.577 4.577 0 01-2.423-1.394A4.601 4.601 0 0113.406.8H11.02v13.125a2.774 2.774 0 01-2.769 2.77c-.9 0-1.698-.43-2.204-1.097a2.78 2.78 0 01-1.523-2.482 2.774 2.774 0 013.61-2.648V7.853c-3.285.068-5.926 2.76-5.926 6.072 0 1.654.658 3.152 1.725 4.247a6.008 6.008 0 003.37 1.028c3.342 0 6.052-2.72 6.052-6.074V6.419z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.919 5.298v-.7a4.55 4.55 0 01-2.423-.694 4.572 4.572 0 002.423 1.394zM13.406.8a4.698 4.698 0 01-.05-.377V0h-3.294v13.126a2.774 2.774 0 01-2.769 2.769 2.75 2.75 0 01-1.246-.297 2.762 2.762 0 002.204 1.097 2.774 2.774 0 002.77-2.77V.8h2.385zM8.133 7.853v-.745a6.089 6.089 0 00-.83-.056c-3.343 0-6.053 2.72-6.053 6.074a6.074 6.074 0 002.683 5.046 6.065 6.065 0 01-1.725-4.247c0-3.311 2.641-6.004 5.925-6.072z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TikTokOriginalIcon;
/* prettier-ignore-end */
