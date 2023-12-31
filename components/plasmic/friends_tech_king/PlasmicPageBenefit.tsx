// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: cI-UCGUt-dL5

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
import sty from "./PlasmicPageBenefit.module.css"; // plasmic-import: cI-UCGUt-dL5/css

createPlasmicElementProxy;

export type PlasmicPageBenefit__VariantMembers = {};
export type PlasmicPageBenefit__VariantsArgs = {};
type VariantPropType = keyof PlasmicPageBenefit__VariantsArgs;
export const PlasmicPageBenefit__VariantProps = new Array<VariantPropType>();

export type PlasmicPageBenefit__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPageBenefit__ArgsType;
export const PlasmicPageBenefit__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicPageBenefit__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPageBenefitProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPageBenefit__RenderFunc(props: {
  variants: PlasmicPageBenefit__VariantsArgs;
  args: PlasmicPageBenefit__ArgsType;
  overrides: PlasmicPageBenefit__OverridesType;
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
      <div className={classNames(projectcss.all, sty.freeBox__ooHlR)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fkf26
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3__yKeHx
                    )}
                  >
                    {"Benefits"}
                  </h3>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          ),
          value: args.children
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__sKwzp)}>
        {p.renderPlasmicSlot({
          defaultContents: "By joining our waitlist, you'll gain access to:",
          value: args.slot
        })}
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__aNeXq)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ylKfV
                )}
              >
                {"\u2022 Exclusive product updates"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__s1R7D
                )}
              >
                {"\u2022 Early access to new features"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wt6UP
                )}
              >
                {"\u2022 Special promotions and rewards"}
              </div>
            </React.Fragment>
          ),
          value: args.slot2
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPageBenefit__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPageBenefit__VariantsArgs;
    args?: PlasmicPageBenefit__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPageBenefit__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPageBenefit__ArgsType,
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
          internalArgPropNames: PlasmicPageBenefit__ArgProps,
          internalVariantPropNames: PlasmicPageBenefit__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPageBenefit__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageBenefit";
  } else {
    func.displayName = `PlasmicPageBenefit.${nodeName}`;
  }
  return func;
}

export const PlasmicPageBenefit = Object.assign(
  // Top-level PlasmicPageBenefit renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPageBenefit
    internalVariantProps: PlasmicPageBenefit__VariantProps,
    internalArgProps: PlasmicPageBenefit__ArgProps
  }
);

export default PlasmicPageBenefit;
/* prettier-ignore-end */
