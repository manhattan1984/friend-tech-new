// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: irj0wRv4NhUG

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

import { useScreenVariants as useScreenVariantswjymDpmg8BQ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WJYMDpmg8bQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: irj0wRv4NhUG/css

import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: ETqfzbeKE61b/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  footer?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  column?: p.Flex<"div">;
  logoWrapper?: p.Flex<"div">;
  smallColumns?: p.Flex<"div">;
  column2?: p.Flex<"div">;
  content?: p.Flex<"div">;
  footerLinks?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  link2?: p.Flex<"a"> & Partial<LinkProps>;
  link3?: p.Flex<"a"> & Partial<LinkProps>;
  link4?: p.Flex<"a"> & Partial<LinkProps>;
  link10?: p.Flex<"a"> & Partial<LinkProps>;
  column3?: p.Flex<"div">;
  content2?: p.Flex<"div">;
  footerLinks2?: p.Flex<"div">;
  link5?: p.Flex<"a"> & Partial<LinkProps>;
  link6?: p.Flex<"a"> & Partial<LinkProps>;
  link7?: p.Flex<"a"> & Partial<LinkProps>;
  column4?: p.Flex<"div">;
  content3?: p.Flex<"div">;
  footerLinks3?: p.Flex<"div">;
  link8?: p.Flex<"div">;
  link9?: p.Flex<"div">;
  copyright?: p.Flex<"div">;
  group21?: p.Flex<"div">;
  frame2?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswjymDpmg8BQ()
  });

  return (
    <div
      data-plasmic-name={"footer"}
      data-plasmic-override={overrides.footer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.footer
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"column"}
          data-plasmic-override={overrides.column}
          hasGap={true}
          className={classNames(projectcss.all, sty.column)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"logoWrapper"}
            data-plasmic-override={overrides.logoWrapper}
            hasGap={true}
            className={classNames(projectcss.all, sty.logoWrapper)}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__xJRs
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
            >
              {"Friend.Tech"}
            </p.PlasmicLink>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__p6I34
              )}
            >
              {"Where Innovation Meets Finance."}
            </div>
          </p.Stack>
        </p.Stack>
        <p.Stack
          as={"div"}
          data-plasmic-name={"smallColumns"}
          data-plasmic-override={overrides.smallColumns}
          hasGap={true}
          className={classNames(projectcss.all, sty.smallColumns)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"column2"}
            data-plasmic-override={overrides.column2}
            hasGap={true}
            className={classNames(projectcss.all, sty.column2)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"content"}
              data-plasmic-override={overrides.content}
              hasGap={true}
              className={classNames(projectcss.all, sty.content)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__d2Ej7
                )}
              >
                {"Main Menu"}
              </div>
              <p.Stack
                as={"div"}
                data-plasmic-name={"footerLinks"}
                data-plasmic-override={overrides.footerLinks}
                hasGap={true}
                className={classNames(projectcss.all, sty.footerLinks)}
              >
                <p.PlasmicLink
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link
                  )}
                  component={Link}
                  href={`/loan`}
                  platform={"nextjs"}
                >
                  {"Loan"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  data-plasmic-name={"link2"}
                  data-plasmic-override={overrides.link2}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link2
                  )}
                  component={Link}
                  href={`/waitlist`}
                  platform={"nextjs"}
                >
                  {"Waitlist"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  data-plasmic-name={"link3"}
                  data-plasmic-override={overrides.link3}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link3
                  )}
                  component={Link}
                  href={`/whitelist`}
                  platform={"nextjs"}
                >
                  {"Whitelist"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  data-plasmic-name={"link4"}
                  data-plasmic-override={overrides.link4}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link4
                  )}
                  component={Link}
                  href={`/mint`}
                  platform={"nextjs"}
                >
                  {"Mint"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  data-plasmic-name={"link10"}
                  data-plasmic-override={overrides.link10}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link10
                  )}
                  component={Link}
                  href={`/investment`}
                  platform={"nextjs"}
                >
                  {"Invest"}
                </p.PlasmicLink>
              </p.Stack>
            </p.Stack>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"column3"}
            data-plasmic-override={overrides.column3}
            hasGap={true}
            className={classNames(projectcss.all, sty.column3)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"content2"}
              data-plasmic-override={overrides.content2}
              hasGap={true}
              className={classNames(projectcss.all, sty.content2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oubL7
                )}
              >
                {"Services"}
              </div>
              <p.Stack
                as={"div"}
                data-plasmic-name={"footerLinks2"}
                data-plasmic-override={overrides.footerLinks2}
                hasGap={true}
                className={classNames(projectcss.all, sty.footerLinks2)}
              >
                <p.PlasmicLink
                  data-plasmic-name={"link5"}
                  data-plasmic-override={overrides.link5}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link5
                  )}
                  component={Link}
                  href={`/community`}
                  platform={"nextjs"}
                >
                  {"Join Community"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  data-plasmic-name={"link6"}
                  data-plasmic-override={overrides.link6}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link6
                  )}
                  component={Link}
                  href={`/airdrop`}
                  platform={"nextjs"}
                >
                  {"Claim Airdrop Bot"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  data-plasmic-name={"link7"}
                  data-plasmic-override={overrides.link7}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link7
                  )}
                  component={Link}
                  href={`/authenticate`}
                  platform={"nextjs"}
                >
                  {"Authenticate"}
                </p.PlasmicLink>
              </p.Stack>
            </p.Stack>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"column4"}
            data-plasmic-override={overrides.column4}
            hasGap={true}
            className={classNames(projectcss.all, sty.column4)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"content3"}
              data-plasmic-override={overrides.content3}
              hasGap={true}
              className={classNames(projectcss.all, sty.content3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__q0B8
                )}
              >
                {"Address"}
              </div>
              <p.Stack
                as={"div"}
                data-plasmic-name={"footerLinks3"}
                data-plasmic-override={overrides.footerLinks3}
                hasGap={true}
                className={classNames(projectcss.all, sty.footerLinks3)}
              >
                <div
                  data-plasmic-name={"link8"}
                  data-plasmic-override={overrides.link8}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.link8
                  )}
                >
                  {"15 Railway Street \nAntrim BT41 4AE UK"}
                </div>
                <div
                  data-plasmic-name={"link9"}
                  data-plasmic-override={overrides.link9}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.link9
                  )}
                >
                  {"Monday To Sunday\n12:00 - 9:00 pm"}
                </div>
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </p.Stack>
      </p.Stack>
      <p.Stack
        as={"div"}
        data-plasmic-name={"copyright"}
        data-plasmic-override={overrides.copyright}
        hasGap={true}
        className={classNames(projectcss.all, sty.copyright)}
      >
        <div
          data-plasmic-name={"group21"}
          data-plasmic-override={overrides.group21}
          className={classNames(projectcss.all, sty.group21)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame2"}
            data-plasmic-override={overrides.frame2}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame2)}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__mMnp
              )}
              component={Link}
              href={"https://twitter.com/friendtech"}
              platform={"nextjs"}
            >
              <Icon19Icon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            </p.PlasmicLink>
          </p.Stack>
        </div>
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Copyright \u00a9 2023 Friend Tech."}
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  footer: [
    "footer",
    "columns",
    "column",
    "logoWrapper",
    "smallColumns",
    "column2",
    "content",
    "footerLinks",
    "link",
    "link2",
    "link3",
    "link4",
    "link10",
    "column3",
    "content2",
    "footerLinks2",
    "link5",
    "link6",
    "link7",
    "column4",
    "content3",
    "footerLinks3",
    "link8",
    "link9",
    "copyright",
    "group21",
    "frame2",
    "svg",
    "text"
  ],
  columns: [
    "columns",
    "column",
    "logoWrapper",
    "smallColumns",
    "column2",
    "content",
    "footerLinks",
    "link",
    "link2",
    "link3",
    "link4",
    "link10",
    "column3",
    "content2",
    "footerLinks2",
    "link5",
    "link6",
    "link7",
    "column4",
    "content3",
    "footerLinks3",
    "link8",
    "link9"
  ],
  column: ["column", "logoWrapper"],
  logoWrapper: ["logoWrapper"],
  smallColumns: [
    "smallColumns",
    "column2",
    "content",
    "footerLinks",
    "link",
    "link2",
    "link3",
    "link4",
    "link10",
    "column3",
    "content2",
    "footerLinks2",
    "link5",
    "link6",
    "link7",
    "column4",
    "content3",
    "footerLinks3",
    "link8",
    "link9"
  ],
  column2: [
    "column2",
    "content",
    "footerLinks",
    "link",
    "link2",
    "link3",
    "link4",
    "link10"
  ],
  content: [
    "content",
    "footerLinks",
    "link",
    "link2",
    "link3",
    "link4",
    "link10"
  ],
  footerLinks: ["footerLinks", "link", "link2", "link3", "link4", "link10"],
  link: ["link"],
  link2: ["link2"],
  link3: ["link3"],
  link4: ["link4"],
  link10: ["link10"],
  column3: ["column3", "content2", "footerLinks2", "link5", "link6", "link7"],
  content2: ["content2", "footerLinks2", "link5", "link6", "link7"],
  footerLinks2: ["footerLinks2", "link5", "link6", "link7"],
  link5: ["link5"],
  link6: ["link6"],
  link7: ["link7"],
  column4: ["column4", "content3", "footerLinks3", "link8", "link9"],
  content3: ["content3", "footerLinks3", "link8", "link9"],
  footerLinks3: ["footerLinks3", "link8", "link9"],
  link8: ["link8"],
  link9: ["link9"],
  copyright: ["copyright", "group21", "frame2", "svg", "text"],
  group21: ["group21", "frame2", "svg"],
  frame2: ["frame2", "svg"],
  svg: ["svg"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  footer: "div";
  columns: "div";
  column: "div";
  logoWrapper: "div";
  smallColumns: "div";
  column2: "div";
  content: "div";
  footerLinks: "div";
  link: "a";
  link2: "a";
  link3: "a";
  link4: "a";
  link10: "a";
  column3: "div";
  content2: "div";
  footerLinks2: "div";
  link5: "a";
  link6: "a";
  link7: "a";
  column4: "div";
  content3: "div";
  footerLinks3: "div";
  link8: "div";
  link9: "div";
  copyright: "div";
  group21: "div";
  frame2: "div";
  svg: "svg";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footer") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("footer"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    logoWrapper: makeNodeComponent("logoWrapper"),
    smallColumns: makeNodeComponent("smallColumns"),
    column2: makeNodeComponent("column2"),
    content: makeNodeComponent("content"),
    footerLinks: makeNodeComponent("footerLinks"),
    link: makeNodeComponent("link"),
    link2: makeNodeComponent("link2"),
    link3: makeNodeComponent("link3"),
    link4: makeNodeComponent("link4"),
    link10: makeNodeComponent("link10"),
    column3: makeNodeComponent("column3"),
    content2: makeNodeComponent("content2"),
    footerLinks2: makeNodeComponent("footerLinks2"),
    link5: makeNodeComponent("link5"),
    link6: makeNodeComponent("link6"),
    link7: makeNodeComponent("link7"),
    column4: makeNodeComponent("column4"),
    content3: makeNodeComponent("content3"),
    footerLinks3: makeNodeComponent("footerLinks3"),
    link8: makeNodeComponent("link8"),
    link9: makeNodeComponent("link9"),
    copyright: makeNodeComponent("copyright"),
    group21: makeNodeComponent("group21"),
    frame2: makeNodeComponent("frame2"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
