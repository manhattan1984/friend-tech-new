// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: 9Xt3tSsiOwrX

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
import sty from "./PlasmicLoanSteps.module.css"; // plasmic-import: 9Xt3tSsiOwrX/css

createPlasmicElementProxy;

export type PlasmicLoanSteps__VariantMembers = {};
export type PlasmicLoanSteps__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoanSteps__VariantsArgs;
export const PlasmicLoanSteps__VariantProps = new Array<VariantPropType>();

export type PlasmicLoanSteps__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicLoanSteps__ArgsType;
export const PlasmicLoanSteps__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicLoanSteps__OverridesType = {
  root?: p.Flex<"div">;
  h6?: p.Flex<"h6">;
};

export interface DefaultLoanStepsProps {
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

function PlasmicLoanSteps__RenderFunc(props: {
  variants: PlasmicLoanSteps__VariantsArgs;
  args: PlasmicLoanSteps__ArgsType;
  overrides: PlasmicLoanSteps__OverridesType;
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
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__vxFqS)}
      >
        <div className={classNames(projectcss.all, sty.freeBox___6Y6Ms)}>
          <div className={classNames(projectcss.all, sty.freeBox__hlC6)}>
            {p.renderPlasmicSlot({
              defaultContents: "1",
              value: args.children,
              className: classNames(sty.slotTargetChildren)
            })}
          </div>
        </div>
        <h6
          data-plasmic-name={"h6"}
          data-plasmic-override={overrides.h6}
          className={classNames(projectcss.all, projectcss.h6, sty.h6)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Transfer crypto to your wallet",
            value: args.slot
          })}
        </h6>
      </p.Stack>
      <div className={classNames(projectcss.all, sty.freeBox__hgVx)}>
        {p.renderPlasmicSlot({
          defaultContents:
            "ChoronHoldings accepts more than 50 cryptocurrencies as collateral. No fees for crypto deposits or withdrawals.",
          value: args.slot2,
          className: classNames(sty.slotTargetSlot2)
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h6"],
  h6: ["h6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h6: "h6";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoanSteps__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoanSteps__VariantsArgs;
    args?: PlasmicLoanSteps__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoanSteps__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoanSteps__ArgsType,
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
          internalArgPropNames: PlasmicLoanSteps__ArgProps,
          internalVariantPropNames: PlasmicLoanSteps__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoanSteps__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoanSteps";
  } else {
    func.displayName = `PlasmicLoanSteps.${nodeName}`;
  }
  return func;
}

export const PlasmicLoanSteps = Object.assign(
  // Top-level PlasmicLoanSteps renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h6: makeNodeComponent("h6"),

    // Metadata about props expected for PlasmicLoanSteps
    internalVariantProps: PlasmicLoanSteps__VariantProps,
    internalArgProps: PlasmicLoanSteps__ArgProps
  }
);

export default PlasmicLoanSteps;
/* prettier-ignore-end */
