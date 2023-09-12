// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: mAetA7ickSj4

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicTestimonial2.module.css"; // plasmic-import: mAetA7ickSj4/css

createPlasmicElementProxy;

export type PlasmicTestimonial2__VariantMembers = {};
export type PlasmicTestimonial2__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestimonial2__VariantsArgs;
export const PlasmicTestimonial2__VariantProps = new Array<VariantPropType>();

export type PlasmicTestimonial2__ArgsType = {
  children?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTestimonial2__ArgsType;
export const PlasmicTestimonial2__ArgProps = new Array<ArgPropType>(
  "children",
  "slot2",
  "slot3",
  "slot"
);

export type PlasmicTestimonial2__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultTestimonial2Props {
  children?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTestimonial2__RenderFunc(props: {
  variants: PlasmicTestimonial2__VariantsArgs;
  args: PlasmicTestimonial2__ArgsType;
  overrides: PlasmicTestimonial2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {'"'}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__o8H5L)}>
        {p.renderPlasmicSlot({
          defaultContents:
            "AquaLight Option has transformed the way I view investing. Their strategies have consistently delivered impressive results, giving me the confidence to secure my financial future.",
          value: args.children
        })}
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__az3CG)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__y0Hxb)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__eFyXw)}
                displayHeight={"30px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"30px"}
                loading={"lazy"}
                src={
                  "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                }
              />
            ),

            value: args.slot
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__lOmli)}>
          <div className={classNames(projectcss.all, sty.freeBox__neksf)}>
            {p.renderPlasmicSlot({
              defaultContents: "Rachael M.",
              value: args.slot2
            })}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__tfLhP)}>
            {p.renderPlasmicSlot({
              defaultContents: "Entrepreneur",
              value: args.slot3,
              className: classNames(sty.slotTargetSlot3)
            })}
          </div>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestimonial2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonial2__VariantsArgs;
    args?: PlasmicTestimonial2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestimonial2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTestimonial2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTestimonial2__ArgProps,
          internalVariantPropNames: PlasmicTestimonial2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTestimonial2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonial2";
  } else {
    func.displayName = `PlasmicTestimonial2.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonial2 = Object.assign(
  // Top-level PlasmicTestimonial2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicTestimonial2
    internalVariantProps: PlasmicTestimonial2__VariantProps,
    internalArgProps: PlasmicTestimonial2__ArgProps
  }
);

export default PlasmicTestimonial2;
/* prettier-ignore-end */
