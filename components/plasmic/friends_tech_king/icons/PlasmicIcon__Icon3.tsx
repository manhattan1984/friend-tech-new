// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-5 0 32 32"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.875 5.844l3.281 3.406c.313.344.594 1.063.594 1.531v10.094c0 .469-.375.906-.875.906h-5.844V20.25h4.906a.28.28 0 00.281-.281v-8.5a.28.28 0 00-.281-.281h-3.625c-.156 0-.313-.125-.313-.281V7.032a.28.28 0 00-.281-.281H9.78c-.156 0-.313.125-.313.281v2.156A3.004 3.004 0 008.436 9h-.469V6.094c0-.5.406-.875.875-.875h7.563c.469 0 1.156.281 1.469.625zm-.062 3.812h1.313c.156 0 .188-.094.094-.219l-1.5-1.531c-.094-.125-.188-.094-.188.063v1.406a.28.28 0 00.281.281zm-7.875 1.188l3.25 3.438c.344.344.594 1.031.594 1.5v10.094c0 .5-.375.906-.844.906H.907a.906.906 0 01-.906-.906V11.095c0-.469.406-.906.906-.906h7.531c.469 0 1.156.313 1.5.656zM1.813 25.25h10.156c.156 0 .313-.125.313-.281v-8.5c0-.156-.156-.281-.313-.281H8.344a.28.28 0 01-.281-.281v-3.875a.28.28 0 00-.281-.281H1.813a.28.28 0 00-.281.281V24.97a.28.28 0 00.281.281zm9.437-10.781l-1.469-1.594c-.125-.125-.219-.031-.219.125v1.375c0 .156.156.281.313.281h1.281c.156 0 .219-.094.094-.188z"
        }
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
