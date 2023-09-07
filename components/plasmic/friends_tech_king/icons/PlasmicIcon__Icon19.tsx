// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
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
          "M19.783 3.918a4.73 4.73 0 00.79-.249c.28-.12.51-.263.876-.504A1 1 0 0123 4c0 1.08-.135 1.967-.447 2.746a5.47 5.47 0 01-1.071 1.674c-.187 3.363-1.16 6.004-2.648 8.005-1.543 2.074-3.595 3.402-5.759 4.146-2.157.741-4.436.907-6.478.656-2.029-.25-3.904-.921-5.211-1.938a1 1 0 01.755-1.78c1.286.185 2.524-.108 3.542-.526-.2-.109-.39-.227-.565-.348-.927-.643-1.676-1.514-2.012-2.188A1 1 0 013.4 13.2c-1.353-1.119-1.9-2.664-1.9-3.7a1 1 0 01.723-.96 7.357 7.357 0 01-.24-.887c-.266-1.287-.242-2.74.047-3.895A1 1 0 013.866 3.5c1.078 1.868 3.065 3.01 4.915 3.686.87.318 1.675.52 2.279.645.13-1.22.47-2.227.994-3.027a4.586 4.586 0 012.686-1.957c1.783-.48 3.76.067 5.043 1.071zm-9.035 5.89a18.334 18.334 0 01-2.654-.744c-1.357-.496-2.933-1.27-4.253-2.468.023.22.057.439.1.652.222 1.071.633 1.671 1.006 1.857a1 1 0 01.49 1.242c-.239.648-.869.7-1.441.558.46.69 1.288 1.378 2.668 1.609a1 1 0 01.032 1.966l-.87.175c.133.115.277.229.43.335.698.483 1.397.69 2.001.54a1 1 0 01.883 1.738c-.644.536-1.396.966-2.15 1.323-.353.168-.749.333-1.178.479.33.07.674.128 1.029.172 1.77.217 3.741.07 5.584-.563 1.836-.631 3.534-1.74 4.804-3.448 1.268-1.705 2.153-4.064 2.272-7.268a1 1 0 01.292-.67c.45-.45.821-.965 1.004-1.579-.32.1-.68.186-1.11.268a1 1 0 01-.894-.275c-.765-.764-2.277-1.267-3.533-.929A2.587 2.587 0 0013.727 5.9C13.315 6.53 13 7.51 13 9a1 1 0 01-.33.743c-.498.45-1.336.184-1.922.066z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
