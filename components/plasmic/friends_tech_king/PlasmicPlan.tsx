// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: R6gMo0vdSGCU

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
import Button2 from "../../Button2"; // plasmic-import: eElla8BSTIjZ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicPlan.module.css"; // plasmic-import: R6gMo0vdSGCU/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: e58rgm-WFTW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: iECEl4Bsrc_/icon

createPlasmicElementProxy;

export type PlasmicPlan__VariantMembers = {};
export type PlasmicPlan__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlan__VariantsArgs;
export const PlasmicPlan__VariantProps = new Array<VariantPropType>();

export type PlasmicPlan__ArgsType = {
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  children?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
  slot6?: React.ReactNode;
  slot7?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPlan__ArgsType;
export const PlasmicPlan__ArgProps = new Array<ArgPropType>(
  "slot",
  "slot2",
  "slot3",
  "children",
  "slot4",
  "slot5",
  "slot6",
  "slot7"
);

export type PlasmicPlan__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPlanProps {
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  children?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
  slot6?: React.ReactNode;
  slot7?: React.ReactNode;
  className?: string;
}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPlan__RenderFunc(props: {
  variants: PlasmicPlan__VariantsArgs;
  args: PlasmicPlan__ArgsType;
  overrides: PlasmicPlan__OverridesType;
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
      <div className={classNames(projectcss.all, sty.freeBox__uZptL)}>
        {p.renderPlasmicSlot({
          defaultContents: "Starter Pack",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ffEnb)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__xGxC2)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__is8On
            )}
          >
            {"Minimum"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__l6RAf)}>
            {p.renderPlasmicSlot({
              defaultContents: "$500",
              value: args.slot3,
              className: classNames(sty.slotTargetSlot3)
            })}
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__sup2R)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__oDk6S
            )}
          >
            {"Maximum"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__yKol)}>
            {p.renderPlasmicSlot({
              defaultContents: "$500",
              value: args.slot6,
              className: classNames(sty.slotTargetSlot6)
            })}
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__nTNu)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__e9Chd
            )}
          >
            {"Daily Income"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__o86K2)}>
            <div className={classNames(projectcss.all, sty.freeBox__vwtNw)}>
              <div className={classNames(projectcss.all, sty.freeBox__cTIr0)}>
                {p.renderPlasmicSlot({
                  defaultContents: "10%",
                  value: args.slot2,
                  className: classNames(sty.slotTargetSlot2)
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___5YhAg)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___23TpA
            )}
          >
            {"Lifespan"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__v6UYp)}>
            <div className={classNames(projectcss.all, sty.freeBox___97LEg)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__aRQnA)}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "5%",
                  value: args.slot7,
                  className: classNames(sty.slotTargetSlot7)
                })}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ixVyx
                  )}
                >
                  {"days"}
                </div>
              </p.Stack>
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__unRbz)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__t27NZ
            )}
          >
            {"Referral Bonus"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__vgf2)}>
            <div className={classNames(projectcss.all, sty.freeBox__awPnq)}>
              <div className={classNames(projectcss.all, sty.freeBox__ftN4C)}>
                {p.renderPlasmicSlot({
                  defaultContents: "5%",
                  value: args.slot5,
                  className: classNames(sty.slotTargetSlot5)
                })}
              </div>
            </div>
          </div>
        </div>
      </p.Stack>
      <div className={classNames(projectcss.all, sty.freeBox__t9WQ)}>
        {p.renderPlasmicSlot({
          defaultContents: "Daily Withdrawal",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__xnOlA)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <Button2
              className={classNames("__wab_instance", sty.button2__kAeDi)}
              color={"teal"}
            >
              {"Invest Now"}
            </Button2>
          ),
          value: args.slot4
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
  PlasmicPlan__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlan__VariantsArgs;
    args?: PlasmicPlan__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlan__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPlan__ArgsType,
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
          internalArgPropNames: PlasmicPlan__ArgProps,
          internalVariantPropNames: PlasmicPlan__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlan__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlan";
  } else {
    func.displayName = `PlasmicPlan.${nodeName}`;
  }
  return func;
}

export const PlasmicPlan = Object.assign(
  // Top-level PlasmicPlan renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPlan
    internalVariantProps: PlasmicPlan__VariantProps,
    internalArgProps: PlasmicPlan__ArgProps
  }
);

export default PlasmicPlan;
/* prettier-ignore-end */
