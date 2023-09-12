// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: 1D1vYwMlm3FT

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
import sty from "./PlasmicTeamItem.module.css"; // plasmic-import: 1D1vYwMlm3FT/css

createPlasmicElementProxy;

export type PlasmicTeamItem__VariantMembers = {};
export type PlasmicTeamItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicTeamItem__VariantsArgs;
export const PlasmicTeamItem__VariantProps = new Array<VariantPropType>();

export type PlasmicTeamItem__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTeamItem__ArgsType;
export const PlasmicTeamItem__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicTeamItem__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTeamItemProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTeamItem__RenderFunc(props: {
  variants: PlasmicTeamItem__VariantsArgs;
  args: PlasmicTeamItem__ArgsType;
  overrides: PlasmicTeamItem__OverridesType;
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
      <div className={classNames(projectcss.all, sty.freeBox__n10T)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__jij)}
              displayHeight={"100px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100px"}
              loading={"lazy"}
            />
          ),

          value: args.children
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox___595At)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <h6
                className={classNames(
                  projectcss.all,
                  projectcss.h6,
                  projectcss.__wab_text,
                  sty.h6__tublY
                )}
              >
                {"Alaksandar Daminik"}
              </h6>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ii2Bu
                )}
              >
                {"CEO / CO-FOUNDER"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__szJ7
                )}
              >
                {
                  "15+ years in FinTechs, Commercial Finance and Trading. A Board Member of the Crypto Valley Association (CVA Western Chapter Chair)."
                }
              </div>
            </React.Fragment>
          ),
          value: args.slot
        })}
      </div>
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
  PlasmicTeamItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTeamItem__VariantsArgs;
    args?: PlasmicTeamItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTeamItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTeamItem__ArgsType,
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
          internalArgPropNames: PlasmicTeamItem__ArgProps,
          internalVariantPropNames: PlasmicTeamItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTeamItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeamItem";
  } else {
    func.displayName = `PlasmicTeamItem.${nodeName}`;
  }
  return func;
}

export const PlasmicTeamItem = Object.assign(
  // Top-level PlasmicTeamItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTeamItem
    internalVariantProps: PlasmicTeamItem__VariantProps,
    internalArgProps: PlasmicTeamItem__ArgProps
  }
);

export default PlasmicTeamItem;
/* prettier-ignore-end */
