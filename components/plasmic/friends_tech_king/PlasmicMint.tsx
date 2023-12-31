// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: CYtkN2cBIEDO

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
import PageSection from "../../PageSection"; // plasmic-import: AICSkwUkXJt3/component
import Hero from "../../Hero"; // plasmic-import: 2S-DfRS0Ri3G/component
import ConnectButton from "../../ConnectButton"; // plasmic-import: 0oyO6LjGlHzw/component
import Button from "../../Button"; // plasmic-import: X48cJgHH48y/component
import BenefitSection from "../../BenefitSection"; // plasmic-import: wTnQKvx7xtRe/component
import Testimonial from "../../Testimonial"; // plasmic-import: txvwGAyHWOKz/component
import ConnectWallet from "../../ConnectWallet"; // plasmic-import: 1GlNaZ2SY0FO/component

import { useScreenVariants as useScreenVariantswjymDpmg8BQ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WJYMDpmg8bQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicMint.module.css"; // plasmic-import: CYtkN2cBIEDO/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: e58rgm-WFTW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: iECEl4Bsrc_/icon

createPlasmicElementProxy;

export type PlasmicMint__VariantMembers = {};
export type PlasmicMint__VariantsArgs = {};
type VariantPropType = keyof PlasmicMint__VariantsArgs;
export const PlasmicMint__VariantProps = new Array<VariantPropType>();

export type PlasmicMint__ArgsType = {};
type ArgPropType = keyof PlasmicMint__ArgsType;
export const PlasmicMint__ArgProps = new Array<ArgPropType>();

export type PlasmicMint__OverridesType = {
  root?: p.Flex<"div">;
  pageSection?: p.Flex<typeof PageSection>;
  hero?: p.Flex<typeof Hero>;
  connectWallet?: p.Flex<typeof ConnectWallet>;
};

export interface DefaultMintProps {}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMint__RenderFunc(props: {
  variants: PlasmicMint__VariantsArgs;
  args: PlasmicMint__ArgsType;
  overrides: PlasmicMint__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswjymDpmg8BQ()
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
          <PageSection
            data-plasmic-name={"pageSection"}
            data-plasmic-override={overrides.pageSection}
            className={classNames("__wab_instance", sty.pageSection)}
            slot={
              <Hero
                data-plasmic-name={"hero"}
                data-plasmic-override={overrides.hero}
                className={classNames("__wab_instance", sty.hero)}
                ctaButtons2={
                  <React.Fragment>
                    <ConnectButton
                      className={classNames(
                        "__wab_instance",
                        sty.connectButton__lmN2I
                      )}
                    >
                      {"Start Minting NFTs"}
                    </ConnectButton>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__wGfRp
                      )}
                      ghost={true}
                      link={"/mint/#about-mint"}
                    >
                      {"Learn More"}
                    </Button>
                  </React.Fragment>
                }
                heroHeading2={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ai8Ii
                    )}
                  >
                    {"Explore the World of NFTs with Friend Tech"}
                  </div>
                }
                slot={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ukjYh)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/friends_tech_king/images/mintpng.png",
                      fullWidth: 576,
                      fullHeight: 1152,
                      aspectRatio: undefined
                    }}
                  />
                }
              >
                {"Mint Your Digital Creations and Showcase Unique NFTs"}
              </Hero>
            }
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__iXz9F)}
              id={"about-mint"}
            >
              <BenefitSection
                className={classNames(
                  "__wab_instance",
                  sty.benefitSection__iZqvk
                )}
                reversed={true}
                slot={
                  "Learn how to create and mint your NFTs on the Friend Tech platform with our user-friendly guide."
                }
                slot2={
                  <Button
                    className={classNames("__wab_instance", sty.button__rgRmX)}
                    color={"blue"}
                  >
                    {"Get Started"}
                  </Button>
                }
                slot3={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__aoHtt)}
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
                {"NFT Minting Process"}
              </BenefitSection>
              <BenefitSection
                alternate={true}
                className={classNames(
                  "__wab_instance",
                  sty.benefitSection__xUCbX
                )}
                slot={
                  "Discover our NFT marketplace, where you can buy, sell, and trade unique digital assets."
                }
                slot2={
                  <Button
                    className={classNames("__wab_instance", sty.button__uyxKx)}
                    color={"blue"}
                  >
                    {"Get Started"}
                  </Button>
                }
                slot3={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__iaf2O)}
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
                {"NFT Marketplace"}
              </BenefitSection>
              <div className={classNames(projectcss.all, sty.freeBox__lx6E4)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gBxKo
                  )}
                >
                  {"Artist Success Stories"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__by7Po
                  )}
                >
                  {
                    "Read inspiring stories of artists who have found success in the NFT space through Friend Tech."
                  }
                </div>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__rMEt)}
                >
                  <Testimonial
                    className={classNames(
                      "__wab_instance",
                      sty.testimonial__pXtak
                    )}
                    slot={"Nina Martinez"}
                    slot2={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__mi0RP)}
                        displayHeight={"100%"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={
                          "https://media.istockphoto.com/id/1139722168/photo/mid-adult-man-smiling-on-gray-background.webp?b=1&s=170667a&w=0&k=20&c=Hk4bTLaIWEOAvY6v768OlpPycRLXLgZiPTjrT-rjCSY="
                        }
                      />
                    }
                  >
                    {
                      "Nina Martinez, an aspiring digital artist, began her NFT journey with Friend Tech. She minted her first NFT collection and was amazed by the response. Her unique digital artworks gained attention from art collectors worldwide, and her career took off. Today, Nina is a celebrated NFT artist, and her creations are in high demand."
                    }
                  </Testimonial>
                  <Testimonial
                    className={classNames(
                      "__wab_instance",
                      sty.testimonial__pUayf
                    )}
                    slot={"Max Thompson"}
                    slot2={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img___8A45T)}
                        displayHeight={"100%"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={
                          "https://media.istockphoto.com/id/183803927/photo/male-portrait.webp?b=1&s=170667a&w=0&k=20&c=H4X5e5rFTs_D5m0-Md7Ap6vDgmE2MFuj3MS7E_0P02U="
                        }
                      />
                    }
                  >
                    {
                      "Max Thompson, a talented illustrator, used Friend Tech to mint his first NFTs. His creative and imaginative artworks found a passionate audience within the NFT community. With the support of Friend Tech's platform, Max's art gained recognition, and he has since collaborated with renowned artists and galleries."
                    }
                  </Testimonial>
                  <Testimonial
                    className={classNames(
                      "__wab_instance",
                      sty.testimonial__fcgdn
                    )}
                    slot={"Emily Clark"}
                    slot2={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__le1R)}
                        displayHeight={"100%"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={
                          "https://media.istockphoto.com/id/1196391449/photo/portrait-of-african-woman.webp?b=1&s=170667a&w=0&k=20&c=cZxhkMwXqOaI1w2Wpq5XC53Jgni5LFIMVhDSDkhvMhA="
                        }
                      />
                    }
                  >
                    {
                      "Emily Clark, a visionary digital artist, started building her NFT portfolio with Friend Tech. Her NFTs quickly gained popularity, and her unique style captivated collectors. Emily's journey transformed her into a sought-after NFT artist, and her work is showcased in galleries and exhibitions globally."
                    }
                  </Testimonial>
                </p.Stack>
              </div>
              <BenefitSection
                alternate={true}
                className={classNames(
                  "__wab_instance",
                  sty.benefitSection__mVo6B
                )}
                reversed={
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? undefined
                    : true
                }
                slot={
                  "Begin your NFT journey today\u2014start minting your digital creations."
                }
                slot2={
                  <ConnectButton
                    className={classNames(
                      "__wab_instance",
                      sty.connectButton__baOrr
                    )}
                  />
                }
                slot3={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__o2Gcm)}
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
                {"Start Minting"}
              </BenefitSection>
            </div>
          </PageSection>
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
  root: ["root", "pageSection", "hero", "connectWallet"],
  pageSection: ["pageSection", "hero"],
  hero: ["hero"],
  connectWallet: ["connectWallet"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageSection: typeof PageSection;
  hero: typeof Hero;
  connectWallet: typeof ConnectWallet;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMint__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMint__VariantsArgs;
    args?: PlasmicMint__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMint__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMint__ArgsType,
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
          internalArgPropNames: PlasmicMint__ArgProps,
          internalVariantPropNames: PlasmicMint__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMint__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMint";
  } else {
    func.displayName = `PlasmicMint.${nodeName}`;
  }
  return func;
}

export const PlasmicMint = Object.assign(
  // Top-level PlasmicMint renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageSection: makeNodeComponent("pageSection"),
    hero: makeNodeComponent("hero"),
    connectWallet: makeNodeComponent("connectWallet"),

    // Metadata about props expected for PlasmicMint
    internalVariantProps: PlasmicMint__VariantProps,
    internalArgProps: PlasmicMint__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMint;
/* prettier-ignore-end */
