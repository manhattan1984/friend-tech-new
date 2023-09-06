// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: uF1kSRwdzjAb

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
import sty from "./PlasmicFeature.module.css"; // plasmic-import: uF1kSRwdzjAb/css

import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: j7u7kYcGFGCX/icon

createPlasmicElementProxy;

export type PlasmicFeature__VariantMembers = {};
export type PlasmicFeature__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeature__VariantsArgs;
export const PlasmicFeature__VariantProps = new Array<VariantPropType>();

export type PlasmicFeature__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicFeature__ArgsType;
export const PlasmicFeature__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicFeature__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultFeatureProps {
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

function PlasmicFeature__RenderFunc(props: {
  variants: PlasmicFeature__VariantsArgs;
  args: PlasmicFeature__ArgsType;
  overrides: PlasmicFeature__OverridesType;
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
      {p.renderPlasmicSlot({
        defaultContents: (
          <Icon11Icon
            className={classNames(projectcss.all, sty.svg__lx2Ua)}
            role={"img"}
          />
        ),

        value: args.children
      })}
      <div className={classNames(projectcss.all, sty.freeBox__tAs75)}>
        <div className={classNames(projectcss.all, sty.freeBox__hbhXb)}>
          {p.renderPlasmicSlot({
            defaultContents: "Expert Guidance",
            value: args.slot2,
            className: classNames(sty.slotTargetSlot2)
          })}
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__r8G5J)}>
        {p.renderPlasmicSlot({
          defaultContents:
            "Our seasoned financial advisors provide personalized guidance, ensuring your investment choices align with your goals.",
          value: args.slot
        })}
      </div>
    </p.Stack>
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
  PlasmicFeature__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeature__VariantsArgs;
    args?: PlasmicFeature__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFeature__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFeature__ArgsType,
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
          internalArgPropNames: PlasmicFeature__ArgProps,
          internalVariantPropNames: PlasmicFeature__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFeature__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeature";
  } else {
    func.displayName = `PlasmicFeature.${nodeName}`;
  }
  return func;
}

export const PlasmicFeature = Object.assign(
  // Top-level PlasmicFeature renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFeature
    internalVariantProps: PlasmicFeature__VariantProps,
    internalArgProps: PlasmicFeature__ArgProps
  }
);

export default PlasmicFeature;
/* prettier-ignore-end */
