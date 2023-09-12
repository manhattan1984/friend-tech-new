// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: RRFlIorcnfB_

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
import MetricItem from "../../MetricItem"; // plasmic-import: 8p_4NvAXmxVJ/component
import Feature from "../../Feature"; // plasmic-import: uF1kSRwdzjAb/component
import PlansPage from "../../PlansPage"; // plasmic-import: pFW8f1wCp2vn/component
import Button2 from "../../Button2"; // plasmic-import: eElla8BSTIjZ/component
import Testimonial2 from "../../Testimonial2"; // plasmic-import: mAetA7ickSj4/component

import { useScreenVariants as useScreenVariantswjymDpmg8BQ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WJYMDpmg8bQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicInvestmentHomepage.module.css"; // plasmic-import: RRFlIorcnfB_/css

import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: XNSObMs5ppki/icon
import Icon9Icon from "./icons/PlasmicIcon__Icon9"; // plasmic-import: eeRUdt8FVI5x/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: UpQV59XvixFf/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: e58rgm-WFTW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: iECEl4Bsrc_/icon

createPlasmicElementProxy;

export type PlasmicInvestmentHomepage__VariantMembers = {};
export type PlasmicInvestmentHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicInvestmentHomepage__VariantsArgs;
export const PlasmicInvestmentHomepage__VariantProps =
  new Array<VariantPropType>();

export type PlasmicInvestmentHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicInvestmentHomepage__ArgsType;
export const PlasmicInvestmentHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicInvestmentHomepage__OverridesType = {
  root?: p.Flex<"div">;
  plansPage?: p.Flex<typeof PlansPage>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultInvestmentHomepageProps {
  className?: string;
}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInvestmentHomepage__RenderFunc(props: {
  variants: PlasmicInvestmentHomepage__VariantsArgs;
  args: PlasmicInvestmentHomepage__ArgsType;
  overrides: PlasmicInvestmentHomepage__OverridesType;
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
      <section className={classNames(projectcss.all, sty.section__a3GW)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__qEYyH
          )}
        >
          {"Featured In"}
        </div>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__hocV0)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cFvDh
            )}
          >
            {"Financial Times"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qx16V
            )}
          >
            {"Forbes"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__s83FP
            )}
          >
            {"Bloomberg"}
          </div>
        </p.Stack>
      </section>
      <section className={classNames(projectcss.all, sty.section___2Cpe5)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__f2Ziw)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cJ0L0
            )}
          >
            {"Trusted by Numbers"}
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__d8Efz)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__b3NyJ
              )}
            >
              {
                "At friend.tech, our results speak volumes. We are dedicated to delivering exceptional outcomes for our clients, backed by solid performance metrics:"
              }
            </div>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__r1LVr)}
            >
              <MetricItem
                className={classNames("__wab_instance", sty.metricItem__dByhp)}
              />

              <MetricItem
                className={classNames("__wab_instance", sty.metricItem__iEtW4)}
                slot={"Average annual ROI"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__f9Ibo
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{"12"}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#00CCCC" }}
                    >
                      {"%"}
                    </span>
                  </React.Fragment>
                </div>
              </MetricItem>
              <MetricItem
                className={classNames("__wab_instance", sty.metricItem__avUve)}
                slot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mnZSh
                    )}
                  >
                    {"client retention rate"}
                  </div>
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jm7D3
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{"95"}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#00CCCC" }}
                    >
                      {"%"}
                    </span>
                  </React.Fragment>
                </div>
              </MetricItem>
            </p.Stack>
          </p.Stack>
        </p.Stack>
      </section>
      <section className={classNames(projectcss.all, sty.section__urOhm)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___35E5O)}
        >
          <Feature className={classNames("__wab_instance", sty.feature__me2OK)}>
            <Icon8Icon
              className={classNames(projectcss.all, sty.svg___53Jid)}
              role={"img"}
            />
          </Feature>
          <Feature
            className={classNames("__wab_instance", sty.feature__qwUa5)}
            slot={
              "Access a wide range of investment options, from stocks and bonds to cryptocurrencies, creating a balanced and resilient portfolio."
            }
            slot2={"Diverse Portfolio"}
          >
            <Icon9Icon
              className={classNames(projectcss.all, sty.svg__oiD7R)}
              role={"img"}
            />
          </Feature>
          <Feature
            className={classNames("__wab_instance", sty.feature__g1Z0B)}
            slot={
              "Stay informed with regular and transparent reports on your portfolio's performance and growth."
            }
            slot2={"Transparent Reporting"}
          >
            <Icon10Icon
              className={classNames(projectcss.all, sty.svg__s6EGd)}
              role={"img"}
            />
          </Feature>
        </p.Stack>
      </section>
      <section
        className={classNames(projectcss.all, sty.section__kl8Gq)}
        id={"#plans"}
      >
        <PlansPage
          data-plasmic-name={"plansPage"}
          data-plasmic-override={overrides.plansPage}
          className={classNames("__wab_instance", sty.plansPage)}
        />
      </section>
      <section className={classNames(projectcss.all, sty.section__t8Bkv)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___5DSzk)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__kwKO)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lackd
              )}
            >
              {"Trusted by Thousands"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___61Fm2
              )}
            >
              {
                "Join the ever-growing community of satisfied investors who have chosen friend.tech as their investment partner. "
              }
            </div>
            <p.PlasmicLink
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(projectcss.all, projectcss.a, sty.link)}
              component={Link}
              platform={"nextjs"}
            >
              <Button2
                className={classNames("__wab_instance", sty.button2__wvvw2)}
                color={"white"}
                ghost={true}
              >
                {"Learn More"}
              </Button2>
            </p.PlasmicLink>
          </p.Stack>
          <div className={classNames(projectcss.all, sty.freeBox__xAuIu)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__n8StZ)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/friends_tech_king/images/phonepng.png",
                fullWidth: 576,
                fullHeight: 1152,
                aspectRatio: undefined
              }}
            />
          </div>
        </p.Stack>
      </section>
      <section className={classNames(projectcss.all, sty.section__hPce)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__swp7Q
          )}
        >
          {"Testimonials"}
        </div>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__n63Ve)}
        >
          <Testimonial2
            className={classNames("__wab_instance", sty.testimonial2___47IIa)}
            slot={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__zacu6)}
                displayHeight={"30px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"30px"}
                loading={"lazy"}
                src={
                  "https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                }
              />
            }
          >
            {
              "friend.tech has transformed the way I view investing. Their strategies have consistently delivered impressive results, giving me the confidence to secure my financial future."
            }
          </Testimonial2>
          <Testimonial2
            className={classNames("__wab_instance", sty.testimonial2__icJf2)}
            slot2={"Michael L."}
            slot3={"Investor"}
          >
            {
              "I've been with friend.tech, and I've seen my investments flourish even in challenging times. Their expertise and commitment are truly remarkable."
            }
          </Testimonial2>
          <Testimonial2
            className={classNames("__wab_instance", sty.testimonial2__x5F1W)}
            slot={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__zg1PH)}
                displayHeight={"30px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"30px"}
                loading={"lazy"}
                src={
                  "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                }
              />
            }
          >
            {
              "friend.tech has transformed the way I view investing. Their strategies have consistently delivered impressive results, giving me the confidence to secure my financial future."
            }
          </Testimonial2>
        </p.Stack>
      </section>
      <section className={classNames(projectcss.all, sty.section__tct0K)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__eAnf)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__yGcm2)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__eYvi6)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/friends_tech_king/images/windowpng2.png",
                fullWidth: 2260,
                fullHeight: 1484,
                aspectRatio: undefined
              }}
            />
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__m0NMw)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wCqm3
              )}
            >
              {"Ready to Start?"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jeNd1
              )}
            >
              {
                "Take the first step towards a brighter financial future with friend.tech. Our proven strategies and dedicated team are here to guide you every step of the way."
              }
            </div>
            <Button2
              className={classNames("__wab_instance", sty.button2__o6SwX)}
              color={"white"}
              ghost={true}
            >
              {"Get Started Today"}
            </Button2>
          </p.Stack>
        </p.Stack>
      </section>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "plansPage", "link"],
  plansPage: ["plansPage"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  plansPage: typeof PlansPage;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInvestmentHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInvestmentHomepage__VariantsArgs;
    args?: PlasmicInvestmentHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInvestmentHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInvestmentHomepage__ArgsType,
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
          internalArgPropNames: PlasmicInvestmentHomepage__ArgProps,
          internalVariantPropNames: PlasmicInvestmentHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInvestmentHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInvestmentHomepage";
  } else {
    func.displayName = `PlasmicInvestmentHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicInvestmentHomepage = Object.assign(
  // Top-level PlasmicInvestmentHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    plansPage: makeNodeComponent("plansPage"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicInvestmentHomepage
    internalVariantProps: PlasmicInvestmentHomepage__VariantProps,
    internalArgProps: PlasmicInvestmentHomepage__ArgProps
  }
);

export default PlasmicInvestmentHomepage;
/* prettier-ignore-end */
