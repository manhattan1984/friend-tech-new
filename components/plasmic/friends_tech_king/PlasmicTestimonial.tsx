// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: txvwGAyHWOKz

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
import sty from "./PlasmicTestimonial.module.css"; // plasmic-import: txvwGAyHWOKz/css

createPlasmicElementProxy;

export type PlasmicTestimonial__VariantMembers = {};
export type PlasmicTestimonial__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestimonial__VariantsArgs;
export const PlasmicTestimonial__VariantProps = new Array<VariantPropType>();

export type PlasmicTestimonial__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTestimonial__ArgsType;
export const PlasmicTestimonial__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicTestimonial__OverridesType = {
  testimonial?: p.Flex<"div">;
  group14?: p.Flex<"div">;
  group13?: p.Flex<"div">;
  text?: p.Flex<"div">;
  group12?: p.Flex<"div">;
  group11?: p.Flex<"div">;
};

export interface DefaultTestimonialProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTestimonial__RenderFunc(props: {
  variants: PlasmicTestimonial__VariantsArgs;
  args: PlasmicTestimonial__ArgsType;
  overrides: PlasmicTestimonial__OverridesType;
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
      data-plasmic-name={"testimonial"}
      data-plasmic-override={overrides.testimonial}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.testimonial
      )}
    >
      <div
        data-plasmic-name={"group14"}
        data-plasmic-override={overrides.group14}
        className={classNames(projectcss.all, sty.group14)}
      >
        <div
          data-plasmic-name={"group13"}
          data-plasmic-override={overrides.group13}
          className={classNames(projectcss.all, sty.group13)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"\u201c"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__sptmj)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "AquaLight Option has transformed the way I view investing. Their strategies have consistently delivered impressive results, giving me the confidence to secure my financial future.",
              value: args.children,
              className: classNames(sty.slotTargetChildren)
            })}
          </div>
        </div>
        <p.Stack
          as={"div"}
          data-plasmic-name={"group12"}
          data-plasmic-override={overrides.group12}
          hasGap={true}
          className={classNames(projectcss.all, sty.group12)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__qqhZw)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__ue58X)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                />
              ),

              value: args.slot2
            })}
          </div>
          <div
            data-plasmic-name={"group11"}
            data-plasmic-override={overrides.group11}
            className={classNames(projectcss.all, sty.group11)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Rachel M.",
              value: args.slot,
              className: classNames(sty.slotTargetSlot)
            })}
          </div>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  testimonial: [
    "testimonial",
    "group14",
    "group13",
    "text",
    "group12",
    "group11"
  ],
  group14: ["group14", "group13", "text", "group12", "group11"],
  group13: ["group13", "text"],
  text: ["text"],
  group12: ["group12", "group11"],
  group11: ["group11"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  testimonial: "div";
  group14: "div";
  group13: "div";
  text: "div";
  group12: "div";
  group11: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestimonial__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonial__VariantsArgs;
    args?: PlasmicTestimonial__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestimonial__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTestimonial__ArgsType,
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
          internalArgPropNames: PlasmicTestimonial__ArgProps,
          internalVariantPropNames: PlasmicTestimonial__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "testimonial") {
    func.displayName = "PlasmicTestimonial";
  } else {
    func.displayName = `PlasmicTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonial = Object.assign(
  // Top-level PlasmicTestimonial renders the root element
  makeNodeComponent("testimonial"),
  {
    // Helper components rendering sub-elements
    group14: makeNodeComponent("group14"),
    group13: makeNodeComponent("group13"),
    text: makeNodeComponent("text"),
    group12: makeNodeComponent("group12"),
    group11: makeNodeComponent("group11"),

    // Metadata about props expected for PlasmicTestimonial
    internalVariantProps: PlasmicTestimonial__VariantProps,
    internalArgProps: PlasmicTestimonial__ArgProps
  }
);

export default PlasmicTestimonial;
/* prettier-ignore-end */
