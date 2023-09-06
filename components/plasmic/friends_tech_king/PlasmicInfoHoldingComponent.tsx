// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: 2sweiwlaoYgh

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
import sty from "./PlasmicInfoHoldingComponent.module.css"; // plasmic-import: 2sweiwlaoYgh/css

import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: UpQV59XvixFf/icon

createPlasmicElementProxy;

export type PlasmicInfoHoldingComponent__VariantMembers = {};
export type PlasmicInfoHoldingComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicInfoHoldingComponent__VariantsArgs;
export const PlasmicInfoHoldingComponent__VariantProps =
  new Array<VariantPropType>();

export type PlasmicInfoHoldingComponent__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicInfoHoldingComponent__ArgsType;
export const PlasmicInfoHoldingComponent__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicInfoHoldingComponent__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultInfoHoldingComponentProps {
  children?: React.ReactNode;
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

function PlasmicInfoHoldingComponent__RenderFunc(props: {
  variants: PlasmicInfoHoldingComponent__VariantsArgs;
  args: PlasmicInfoHoldingComponent__ArgsType;
  overrides: PlasmicInfoHoldingComponent__OverridesType;
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
      <Icon10Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___16Kgf
              )}
            >
              <React.Fragment>
                <React.Fragment> </React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#000000" }}
                >
                  {"ChoronHoldings SA"}
                </span>
                <React.Fragment>
                  {
                    " crypto-backed lending solutions structured in the form of collateralised (pawnshop) loans. "
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
          ),
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "freeBox"],
  svg: ["svg"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInfoHoldingComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInfoHoldingComponent__VariantsArgs;
    args?: PlasmicInfoHoldingComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInfoHoldingComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInfoHoldingComponent__ArgsType,
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
          internalArgPropNames: PlasmicInfoHoldingComponent__ArgProps,
          internalVariantPropNames: PlasmicInfoHoldingComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInfoHoldingComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInfoHoldingComponent";
  } else {
    func.displayName = `PlasmicInfoHoldingComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicInfoHoldingComponent = Object.assign(
  // Top-level PlasmicInfoHoldingComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicInfoHoldingComponent
    internalVariantProps: PlasmicInfoHoldingComponent__VariantProps,
    internalArgProps: PlasmicInfoHoldingComponent__ArgProps
  }
);

export default PlasmicInfoHoldingComponent;
/* prettier-ignore-end */