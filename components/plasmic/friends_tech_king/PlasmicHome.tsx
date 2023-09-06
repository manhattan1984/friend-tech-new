// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: k4Jo9vYYOfaB

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
import BenefitSection from "../../BenefitSection"; // plasmic-import: wTnQKvx7xtRe/component
import Footer from "../../Footer"; // plasmic-import: irj0wRv4NhUG/component

import { useScreenVariants as useScreenVariantswjymDpmg8BQ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WJYMDpmg8bQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: k4Jo9vYYOfaB/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: e58rgm-WFTW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: iECEl4Bsrc_/icon

createPlasmicElementProxy;

export type PlasmicHome__VariantMembers = {};
export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  design?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  hero?: p.Flex<typeof Hero>;
  freeBox?: p.Flex<"div">;
  whitelist?: p.Flex<"div">;
  waitlist?: p.Flex<"div">;
  loan?: p.Flex<"div">;
  community?: p.Flex<"div">;
  airdrop?: p.Flex<"div">;
  authentication?: p.Flex<"div">;
  mint?: p.Flex<"div">;
  invest?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {}

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

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHome.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHome.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHome.pageMetadata.title}
        />
      </Head>

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
            data-plasmic-name={"design"}
            data-plasmic-override={overrides.design}
            className={classNames(projectcss.all, sty.design)}
          >
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
                  <div
                    data-plasmic-name={"freeBox"}
                    data-plasmic-override={overrides.freeBox}
                    className={classNames(
                      projectcss.all,
                      sty.freeBox,
                      "interact-button" as const
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mQk0R
                      )}
                    >
                      {"Get Started"}
                    </div>
                  </div>
                  <Button
                    className={classNames("__wab_instance", sty.button__ofS0O)}
                    ghost={true}
                    link={"/#whitelist" as const}
                  >
                    {"Learn More"}
                  </Button>
                </React.Fragment>
              }
              heroHeading2={
                <React.Fragment>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mWaGv
                    )}
                  >
                    {"Welcome to Friend.Tech"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__j4SJ9
                    )}
                  >
                    {"Where Innovation Meets Finance."}
                  </div>
                </React.Fragment>
              }
            />

            {true ? (
              <div
                data-plasmic-name={"whitelist"}
                data-plasmic-override={overrides.whitelist}
                className={classNames(projectcss.all, sty.whitelist)}
                id={"whitelist" as const}
              >
                <BenefitSection
                  className={classNames(
                    "__wab_instance",
                    sty.benefitSection__hGy5S
                  )}
                  reversed={
                    hasVariant(globalVariants, "screen", "desktopOnly")
                      ? true
                      : undefined
                  }
                  slot2={
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__lghmW
                      )}
                      color={"blue" as const}
                      link={`/whitelist`}
                    >
                      {"Get Whitelisted"}
                    </Button>
                  }
                />
              </div>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"waitlist"}
                data-plasmic-override={overrides.waitlist}
                className={classNames(projectcss.all, sty.waitlist)}
                id={"waitlist" as const}
              >
                <BenefitSection
                  alternate={true}
                  className={classNames(
                    "__wab_instance",
                    sty.benefitSection___4IVsi
                  )}
                  slot={
                    "Be the first to access cutting-edge financial solutions and technology updates.  Join our waitlist to receive exclusive news and opportunities."
                  }
                  slot2={
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___04LbX
                      )}
                      color={"blue" as const}
                      link={`/waitlist`}
                    >
                      {"Join Now"}
                    </Button>
                  }
                  slot3={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__dhZvd)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/friends_tech_king/images/waitlistpng.png",
                        fullWidth: 577,
                        fullHeight: 1152,
                        aspectRatio: undefined
                      }}
                    />
                  }
                >
                  {"Join the Waitlist for Exclusive Updates"}
                </BenefitSection>
              </div>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"loan"}
                data-plasmic-override={overrides.loan}
                className={classNames(projectcss.all, sty.loan)}
                id={"loan" as const}
              >
                <BenefitSection
                  className={classNames(
                    "__wab_instance",
                    sty.benefitSection__nb2U
                  )}
                  reversed={
                    hasVariant(globalVariants, "screen", "desktopOnly")
                      ? true
                      : undefined
                  }
                  slot={
                    "Friend Tech offers secure, hassle-free cryptocurrency loans tailored to your needs. Take advantage of our competitive interest rates and flexible terms to grow your wealth."
                  }
                  slot2={
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___3XBim
                      )}
                      color={"blue" as const}
                      link={`/loan`}
                    >
                      {"Explore Loan Options"}
                    </Button>
                  }
                  slot3={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__lH5Bf)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/friends_tech_king/images/loanpng.png",
                        fullWidth: 576,
                        fullHeight: 1152,
                        aspectRatio: undefined
                      }}
                    />
                  }
                >
                  {"Secure Loans for Your Financial Goals"}
                </BenefitSection>
              </div>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"community"}
                data-plasmic-override={overrides.community}
                className={classNames(projectcss.all, sty.community)}
                id={"community" as const}
              >
                <BenefitSection
                  alternate={true}
                  className={classNames(
                    "__wab_instance",
                    sty.benefitSection__e6Es2
                  )}
                  slot={
                    "Join a vibrant network of tech enthusiasts and finance experts. Share insights, stay updated on industry trends, and collaborate with like-minded individuals."
                  }
                  slot2={
                    <Button
                      className={classNames("__wab_instance", sty.button__nNmZ)}
                      color={"blue" as const}
                      link={`/community`}
                    >
                      {"Join The Community"}
                    </Button>
                  }
                  slot3={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__dFlP3)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/friends_tech_king/images/communitypng.png",
                        fullWidth: 577,
                        fullHeight: 1152,
                        aspectRatio: undefined
                      }}
                    />
                  }
                >
                  {"Connect with Our Thriving Community"}
                </BenefitSection>
              </div>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"airdrop"}
                data-plasmic-override={overrides.airdrop}
                className={classNames(projectcss.all, sty.airdrop)}
                id={"airdrop" as const}
              >
                <BenefitSection
                  className={classNames(
                    "__wab_instance",
                    sty.benefitSection___0R61P
                  )}
                  reversed={
                    hasVariant(globalVariants, "screen", "desktopOnly")
                      ? true
                      : undefined
                  }
                  slot={
                    "Participate in our token airdrops and get rewarded for your support. Claim your airdrop tokens effortlessly with Friend Tech."
                  }
                  slot2={
                    <Button
                      className={classNames("__wab_instance", sty.button__eNzM)}
                      color={"blue" as const}
                      link={`/airdrop`}
                    >
                      {"Claim Your Airdrop"}
                    </Button>
                  }
                  slot3={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__qawyj)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/friends_tech_king/images/homeAirdroppng.png",
                        fullWidth: 576,
                        fullHeight: 1152,
                        aspectRatio: undefined
                      }}
                    />
                  }
                >
                  {"Claim Your Token Airdrops"}
                </BenefitSection>
              </div>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"authentication"}
                data-plasmic-override={overrides.authentication}
                className={classNames(projectcss.all, sty.authentication)}
                id={"authenticate" as const}
              >
                <BenefitSection
                  alternate={true}
                  className={classNames(
                    "__wab_instance",
                    sty.benefitSection__sUxlV
                  )}
                  slot={
                    "Protect your assets with our cutting-edge wallet authentication system. Ensure the utmost security for your digital assets with Friend Tech."
                  }
                  slot2={
                    <Button
                      className={classNames("__wab_instance", sty.button__vji7)}
                      color={"blue" as const}
                      link={`/authenticate`}
                    >
                      {"Secure Your Wallet"}
                    </Button>
                  }
                  slot3={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__byRiC)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/friends_tech_king/images/homewaitlistpng.png",
                        fullWidth: 577,
                        fullHeight: 1152,
                        aspectRatio: undefined
                      }}
                    />
                  }
                >
                  {"Enhanced Wallet Security"}
                </BenefitSection>
              </div>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"mint"}
                data-plasmic-override={overrides.mint}
                className={classNames(projectcss.all, sty.mint)}
                id={"mint" as const}
              >
                <BenefitSection
                  className={classNames(
                    "__wab_instance",
                    sty.benefitSection__rb961
                  )}
                  reversed={
                    hasVariant(globalVariants, "screen", "desktopOnly")
                      ? true
                      : undefined
                  }
                  slot={
                    "Explore the exciting world of NFTs on Friend Tech's platform. Mint your digital creations and engage in the NFT marketplace to showcase your unique content."
                  }
                  slot2={
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__oluyh
                      )}
                      color={"blue" as const}
                      link={`/mint`}
                    >
                      {"Start Minting NFTs"}
                    </Button>
                  }
                  slot3={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__iosTh)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/friends_tech_king/images/mintpng.png",
                        fullWidth: 576,
                        fullHeight: 1152,
                        aspectRatio: undefined
                      }}
                    />
                  }
                >
                  {"Create and Trade Unique NFTs"}
                </BenefitSection>
              </div>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"invest"}
                data-plasmic-override={overrides.invest}
                className={classNames(projectcss.all, sty.invest)}
                id={"mint" as const}
              >
                <BenefitSection
                  alternate={true}
                  className={classNames(
                    "__wab_instance",
                    sty.benefitSection__uwOIi
                  )}
                  slot={
                    "Invest with confidence. Explore our diverse investment options and grow your wealth securely with Friend Tech."
                  }
                  slot2={
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__eAmLz
                      )}
                      color={"blue" as const}
                      link={`/investment`}
                    >
                      {"Start Investing"}
                    </Button>
                  }
                  slot3={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__ecYn)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/friends_tech_king/images/portfolioPhonepng2.png",
                        fullWidth: 865,
                        fullHeight: 1728,
                        aspectRatio: undefined
                      }}
                    />
                  }
                >
                  {"Invest with Confidence"}
                </BenefitSection>
              </div>
            ) : null}
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "design",
    "navbar",
    "hero",
    "freeBox",
    "whitelist",
    "waitlist",
    "loan",
    "community",
    "airdrop",
    "authentication",
    "mint",
    "invest",
    "footer"
  ],
  design: [
    "design",
    "navbar",
    "hero",
    "freeBox",
    "whitelist",
    "waitlist",
    "loan",
    "community",
    "airdrop",
    "authentication",
    "mint",
    "invest",
    "footer"
  ],
  navbar: ["navbar"],
  hero: ["hero", "freeBox"],
  freeBox: ["freeBox"],
  whitelist: ["whitelist"],
  waitlist: ["waitlist"],
  loan: ["loan"],
  community: ["community"],
  airdrop: ["airdrop"],
  authentication: ["authentication"],
  mint: ["mint"],
  invest: ["invest"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  design: "div";
  navbar: typeof Navbar;
  hero: typeof Hero;
  freeBox: "div";
  whitelist: "div";
  waitlist: "div";
  loan: "div";
  community: "div";
  airdrop: "div";
  authentication: "div";
  mint: "div";
  invest: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHome__ArgsType,
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
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    design: makeNodeComponent("design"),
    navbar: makeNodeComponent("navbar"),
    hero: makeNodeComponent("hero"),
    freeBox: makeNodeComponent("freeBox"),
    whitelist: makeNodeComponent("whitelist"),
    waitlist: makeNodeComponent("waitlist"),
    loan: makeNodeComponent("loan"),
    community: makeNodeComponent("community"),
    airdrop: makeNodeComponent("airdrop"),
    authentication: makeNodeComponent("authentication"),
    mint: makeNodeComponent("mint"),
    invest: makeNodeComponent("invest"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "friend.tech",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */