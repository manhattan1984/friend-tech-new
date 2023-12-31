// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: ArQrHzR6rD-y

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
import Navbar from "../../Navbar"; // plasmic-import: SfWv_--dQ9Pb/component
import LoanHomepage from "../../LoanHomepage"; // plasmic-import: pgGkyFmZe3k7/component
import Footer from "../../Footer"; // plasmic-import: irj0wRv4NhUG/component
import ConnectWallet from "../../ConnectWallet"; // plasmic-import: 1GlNaZ2SY0FO/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicLoan.module.css"; // plasmic-import: ArQrHzR6rD-y/css

createPlasmicElementProxy;

export type PlasmicLoan__VariantMembers = {};
export type PlasmicLoan__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoan__VariantsArgs;
export const PlasmicLoan__VariantProps = new Array<VariantPropType>();

export type PlasmicLoan__ArgsType = {};
type ArgPropType = keyof PlasmicLoan__ArgsType;
export const PlasmicLoan__ArgProps = new Array<ArgPropType>();

export type PlasmicLoan__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  loanHomepage?: p.Flex<typeof LoanHomepage>;
  footer?: p.Flex<typeof Footer>;
  connectWallet?: p.Flex<typeof ConnectWallet>;
};

export interface DefaultLoanProps {}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLoan__RenderFunc(props: {
  variants: PlasmicLoan__VariantsArgs;
  args: PlasmicLoan__ArgsType;
  overrides: PlasmicLoan__OverridesType;
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

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "startConnect",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />

            <LoanHomepage
              data-plasmic-name={"loanHomepage"}
              data-plasmic-override={overrides.loanHomepage}
              className={classNames("__wab_instance", sty.loanHomepage)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </div>
          <ConnectWallet
            data-plasmic-name={"connectWallet"}
            data-plasmic-override={overrides.connectWallet}
            className={classNames("__wab_instance", sty.connectWallet)}
            connectWallet={(() => {
              try {
                return $state.startConnect;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "navbar",
    "loanHomepage",
    "footer",
    "connectWallet"
  ],
  freeBox: ["freeBox", "navbar", "loanHomepage", "footer"],
  navbar: ["navbar"],
  loanHomepage: ["loanHomepage"],
  footer: ["footer"],
  connectWallet: ["connectWallet"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  navbar: typeof Navbar;
  loanHomepage: typeof LoanHomepage;
  footer: typeof Footer;
  connectWallet: typeof ConnectWallet;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoan__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoan__VariantsArgs;
    args?: PlasmicLoan__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoan__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoan__ArgsType,
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
          internalArgPropNames: PlasmicLoan__ArgProps,
          internalVariantPropNames: PlasmicLoan__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoan__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoan";
  } else {
    func.displayName = `PlasmicLoan.${nodeName}`;
  }
  return func;
}

export const PlasmicLoan = Object.assign(
  // Top-level PlasmicLoan renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    navbar: makeNodeComponent("navbar"),
    loanHomepage: makeNodeComponent("loanHomepage"),
    footer: makeNodeComponent("footer"),
    connectWallet: makeNodeComponent("connectWallet"),

    // Metadata about props expected for PlasmicLoan
    internalVariantProps: PlasmicLoan__VariantProps,
    internalArgProps: PlasmicLoan__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLoan;
/* prettier-ignore-end */
