// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: vCCfpRKdAe6W

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
import ConnectWallet from "../../ConnectWallet"; // plasmic-import: 1GlNaZ2SY0FO/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicCommunity.module.css"; // plasmic-import: vCCfpRKdAe6W/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: e58rgm-WFTW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: iECEl4Bsrc_/icon

createPlasmicElementProxy;

export type PlasmicCommunity__VariantMembers = {};
export type PlasmicCommunity__VariantsArgs = {};
type VariantPropType = keyof PlasmicCommunity__VariantsArgs;
export const PlasmicCommunity__VariantProps = new Array<VariantPropType>();

export type PlasmicCommunity__ArgsType = {};
type ArgPropType = keyof PlasmicCommunity__ArgsType;
export const PlasmicCommunity__ArgProps = new Array<ArgPropType>();

export type PlasmicCommunity__OverridesType = {
  root?: p.Flex<"div">;
  pageSection?: p.Flex<typeof PageSection>;
  hero?: p.Flex<typeof Hero>;
  text?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  connectWallet?: p.Flex<typeof ConnectWallet>;
};

export interface DefaultCommunityProps {}

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

function PlasmicCommunity__RenderFunc(props: {
  variants: PlasmicCommunity__VariantsArgs;
  args: PlasmicCommunity__ArgsType;
  overrides: PlasmicCommunity__OverridesType;
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
                        sty.connectButton__eJc15
                      )}
                    >
                      {"Join The Community"}
                    </ConnectButton>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__nYn9B
                      )}
                      ghost={true}
                      link={"/community/#community"}
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
                    {"Join the Friend Tech Community"}
                  </div>
                }
                slot={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__lAYnM)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/friends_tech_king/images/communitypng.png",
                      fullWidth: 577,
                      fullHeight: 1152,
                      aspectRatio: undefined
                    }}
                  />
                }
              >
                {
                  "Connect with Like-Minded Individuals and Stay Ahead in the Tech World"
                }
              </Hero>
            }
          >
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
              id={"community"}
            >
              <BenefitSection
                className={classNames(
                  "__wab_instance",
                  sty.benefitSection__fzUq
                )}
                slot={
                  "Friendtech is a 3.0 Al integrated bot mechanism built by the most advanced web3 developers to solve hardcore equations on contracts and transactions\nAlso provides anticlockwise detection arithmetic analogy which is specifically built to trace and undo undesired transactions on-chain\n\nFriendtech is more than just a community we're a family taking full responsibility of the security of web3 asset and liquidity; to support, build, promote and even authenticate blockchain protocols."
                }
                slot2={
                  <Button
                    className={classNames("__wab_instance", sty.button___2BCvk)}
                    color={"blue"}
                  >
                    {"Join Now"}
                  </Button>
                }
                slot3={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__lpStt)}
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
                {"Community Forums"}
              </BenefitSection>
              <BenefitSection
                alternate={true}
                className={classNames(
                  "__wab_instance",
                  sty.benefitSection__tCv23
                )}
                slot={
                  "Stay informed about upcoming events, webinars, and meetups where you can network and learn from industry experts."
                }
                slot2={
                  <Button
                    className={classNames("__wab_instance", sty.button__pmjOf)}
                    color={"blue"}
                  >
                    {"Join Now"}
                  </Button>
                }
                slot3={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__tapVv)}
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
                {"Events and Webinars"}
              </BenefitSection>
              <BenefitSection
                className={classNames(
                  "__wab_instance",
                  sty.benefitSection__nkP50
                )}
                slot={
                  "Discover success stories from our community members who have harnessed the power of Friend Tech."
                }
                slot2={
                  <Button
                    className={classNames("__wab_instance", sty.button__eeqa7)}
                    color={"blue"}
                  >
                    {"Join Now"}
                  </Button>
                }
                slot3={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___9M76Y)}
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
                {"Member Stories"}
              </BenefitSection>
              <BenefitSection
                alternate={true}
                className={classNames(
                  "__wab_instance",
                  sty.benefitSection__lYyGc
                )}
                slot={
                  "Ready to connect with tech enthusiasts and industry experts? Join our community today."
                }
                slot2={
                  <ConnectButton
                    className={classNames(
                      "__wab_instance",
                      sty.connectButton__wpQqe
                    )}
                  >
                    {"Join Now"}
                  </ConnectButton>
                }
                slot3={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__v4Dcz)}
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
                {"Join Our Community"}
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
  root: ["root", "pageSection", "hero", "text", "freeBox", "connectWallet"],
  pageSection: ["pageSection", "hero", "text", "freeBox"],
  hero: ["hero", "text"],
  text: ["text"],
  freeBox: ["freeBox"],
  connectWallet: ["connectWallet"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageSection: typeof PageSection;
  hero: typeof Hero;
  text: "div";
  freeBox: "div";
  connectWallet: typeof ConnectWallet;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCommunity__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCommunity__VariantsArgs;
    args?: PlasmicCommunity__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCommunity__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCommunity__ArgsType,
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
          internalArgPropNames: PlasmicCommunity__ArgProps,
          internalVariantPropNames: PlasmicCommunity__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCommunity__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCommunity";
  } else {
    func.displayName = `PlasmicCommunity.${nodeName}`;
  }
  return func;
}

export const PlasmicCommunity = Object.assign(
  // Top-level PlasmicCommunity renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageSection: makeNodeComponent("pageSection"),
    hero: makeNodeComponent("hero"),
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),
    connectWallet: makeNodeComponent("connectWallet"),

    // Metadata about props expected for PlasmicCommunity
    internalVariantProps: PlasmicCommunity__VariantProps,
    internalArgProps: PlasmicCommunity__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCommunity;
/* prettier-ignore-end */
