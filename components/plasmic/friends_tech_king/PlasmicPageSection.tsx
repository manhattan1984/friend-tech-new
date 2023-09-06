// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: AICSkwUkXJt3

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
import Hero from "../../Hero"; // plasmic-import: 2S-DfRS0Ri3G/component
import Button from "../../Button"; // plasmic-import: X48cJgHH48y/component
import Footer from "../../Footer"; // plasmic-import: irj0wRv4NhUG/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicPageSection.module.css"; // plasmic-import: AICSkwUkXJt3/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: e58rgm-WFTW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: iECEl4Bsrc_/icon

createPlasmicElementProxy;

export type PlasmicPageSection__VariantMembers = {};
export type PlasmicPageSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicPageSection__VariantsArgs;
export const PlasmicPageSection__VariantProps = new Array<VariantPropType>();

export type PlasmicPageSection__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPageSection__ArgsType;
export const PlasmicPageSection__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicPageSection__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  section?: p.Flex<"section">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultPageSectionProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
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

function PlasmicPageSection__RenderFunc(props: {
  variants: PlasmicPageSection__VariantsArgs;
  args: PlasmicPageSection__ArgsType;
  overrides: PlasmicPageSection__OverridesType;
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
      {true ? (
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

          {p.renderPlasmicSlot({
            defaultContents: (
              <Hero
                className={classNames("__wab_instance", sty.hero___4K)}
                heroHeading2={
                  <React.Fragment>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lIsq
                      )}
                    >
                      {"Welcome to Friend.Tech"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__km7Lu
                      )}
                    >
                      {
                        "Unlock Premium Benefits as a Friend Tech Whitelist Member"
                      }
                    </div>
                  </React.Fragment>
                }
              />
            ),

            value: args.slot
          })}
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            {p.renderPlasmicSlot({
              defaultContents: null,
              value: args.children
            })}
          </section>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "navbar", "section", "footer"],
  freeBox: ["freeBox", "navbar", "section", "footer"],
  navbar: ["navbar"],
  section: ["section"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  navbar: typeof Navbar;
  section: "section";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPageSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPageSection__VariantsArgs;
    args?: PlasmicPageSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPageSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPageSection__ArgsType,
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
          internalArgPropNames: PlasmicPageSection__ArgProps,
          internalVariantPropNames: PlasmicPageSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPageSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageSection";
  } else {
    func.displayName = `PlasmicPageSection.${nodeName}`;
  }
  return func;
}

export const PlasmicPageSection = Object.assign(
  // Top-level PlasmicPageSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    navbar: makeNodeComponent("navbar"),
    section: makeNodeComponent("section"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPageSection
    internalVariantProps: PlasmicPageSection__VariantProps,
    internalArgProps: PlasmicPageSection__ArgProps
  }
);

export default PlasmicPageSection;
/* prettier-ignore-end */