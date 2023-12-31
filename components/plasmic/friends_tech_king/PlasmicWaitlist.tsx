// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: cKtNscfl8RsZ

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
import ConnectButton from "../../ConnectButton"; // plasmic-import: 0oyO6LjGlHzw/component
import Button from "../../Button"; // plasmic-import: X48cJgHH48y/component
import PageBenefit from "../../PageBenefit"; // plasmic-import: cI-UCGUt-dL5/component
import BenefitSection from "../../BenefitSection"; // plasmic-import: wTnQKvx7xtRe/component
import Footer from "../../Footer"; // plasmic-import: irj0wRv4NhUG/component
import ConnectWallet from "../../ConnectWallet"; // plasmic-import: 1GlNaZ2SY0FO/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicWaitlist.module.css"; // plasmic-import: cKtNscfl8RsZ/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: e58rgm-WFTW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: iECEl4Bsrc_/icon

createPlasmicElementProxy;

export type PlasmicWaitlist__VariantMembers = {};
export type PlasmicWaitlist__VariantsArgs = {};
type VariantPropType = keyof PlasmicWaitlist__VariantsArgs;
export const PlasmicWaitlist__VariantProps = new Array<VariantPropType>();

export type PlasmicWaitlist__ArgsType = {};
type ArgPropType = keyof PlasmicWaitlist__ArgsType;
export const PlasmicWaitlist__ArgProps = new Array<ArgPropType>();

export type PlasmicWaitlist__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  hero?: p.Flex<typeof Hero>;
  text?: p.Flex<"div">;
  pageBenefit?: p.Flex<typeof PageBenefit>;
  footer?: p.Flex<typeof Footer>;
  connectWallet?: p.Flex<typeof ConnectWallet>;
};

export interface DefaultWaitlistProps {}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicWaitlist__RenderFunc(props: {
  variants: PlasmicWaitlist__VariantsArgs;
  args: PlasmicWaitlist__ArgsType;
  overrides: PlasmicWaitlist__OverridesType;
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
        path: "connectWallet",
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
          <div className={classNames(projectcss.all, sty.freeBox__bJ57P)}>
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />

            <Hero
              data-plasmic-name={"hero"}
              data-plasmic-override={overrides.hero}
              className={classNames("__wab_instance", sty.hero)}
              ctaButtons2={
                <React.Fragment>
                  <ConnectButton
                    className={classNames(
                      "__wab_instance",
                      sty.connectButton___8XKcD
                    )}
                  >
                    {"Join Now"}
                  </ConnectButton>
                  <Button
                    className={classNames("__wab_instance", sty.button__wCzYw)}
                    ghost={true}
                    link={"/waitlist/#about-waitlist"}
                  >
                    {"Learn More"}
                  </Button>
                </React.Fragment>
              }
              heroHeading2={
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Be the First to Experience Friend Tech Innovations"}
                </div>
              }
              slot={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___8TGz3)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/friends_tech_king/images/waitlistpng.png",
                    fullWidth: 577,
                    fullHeight: 1152,
                    aspectRatio: undefined
                  }}
                />
              }
            >
              {"Join Our Waitlist for Exclusive Updates and Early Access."}
            </Hero>
            <div
              className={classNames(projectcss.all, sty.freeBox__c36Rh)}
              id={"about-waitlist"}
            >
              <PageBenefit
                data-plasmic-name={"pageBenefit"}
                data-plasmic-override={overrides.pageBenefit}
                className={classNames("__wab_instance", sty.pageBenefit)}
              />
            </div>
            <BenefitSection
              alternate={true}
              className={classNames(
                "__wab_instance",
                sty.benefitSection__pWiNs
              )}
              slot={
                "Join the Friend Tech waitlist by signing up. We'll keep you informed about upcoming developments and opportunities."
              }
              slot2={
                <ConnectButton
                  className={classNames(
                    "__wab_instance",
                    sty.connectButton__hShVm
                  )}
                >
                  {"Join Now"}
                </ConnectButton>
              }
              slot3={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__neKjA)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={"https://placehold.co/600x400"}
                />
              }
            >
              {"Join Waitlist Form"}
            </BenefitSection>
            <BenefitSection
              className={classNames(
                "__wab_instance",
                sty.benefitSection___0IZob
              )}
              slot={
                "Help us grow our community by sharing the waitlist with friends and colleagues."
              }
              slot2={
                <Button
                  className={classNames("__wab_instance", sty.button__yykmi)}
                  color={"blue"}
                >
                  {"Get Whitelisted"}
                </Button>
              }
              slot3={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__s7Vd)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={"https://placehold.co/600x400"}
                />
              }
            >
              {"Share"}
            </BenefitSection>
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
                return $state.connectWallet;
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
    "navbar",
    "hero",
    "text",
    "pageBenefit",
    "footer",
    "connectWallet"
  ],
  navbar: ["navbar"],
  hero: ["hero", "text"],
  text: ["text"],
  pageBenefit: ["pageBenefit"],
  footer: ["footer"],
  connectWallet: ["connectWallet"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  hero: typeof Hero;
  text: "div";
  pageBenefit: typeof PageBenefit;
  footer: typeof Footer;
  connectWallet: typeof ConnectWallet;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWaitlist__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWaitlist__VariantsArgs;
    args?: PlasmicWaitlist__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWaitlist__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWaitlist__ArgsType,
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
          internalArgPropNames: PlasmicWaitlist__ArgProps,
          internalVariantPropNames: PlasmicWaitlist__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWaitlist__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWaitlist";
  } else {
    func.displayName = `PlasmicWaitlist.${nodeName}`;
  }
  return func;
}

export const PlasmicWaitlist = Object.assign(
  // Top-level PlasmicWaitlist renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    hero: makeNodeComponent("hero"),
    text: makeNodeComponent("text"),
    pageBenefit: makeNodeComponent("pageBenefit"),
    footer: makeNodeComponent("footer"),
    connectWallet: makeNodeComponent("connectWallet"),

    // Metadata about props expected for PlasmicWaitlist
    internalVariantProps: PlasmicWaitlist__VariantProps,
    internalArgProps: PlasmicWaitlist__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWaitlist;
/* prettier-ignore-end */
