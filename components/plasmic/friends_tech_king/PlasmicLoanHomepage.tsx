// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: pgGkyFmZe3k7

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
import Button3 from "../../Button3"; // plasmic-import: 6mO-YzPwqb-d/component
import InfoHoldingComponent from "../../InfoHoldingComponent"; // plasmic-import: 2sweiwlaoYgh/component
import BackersLink from "../../BackersLink"; // plasmic-import: Sl58UbzqihgE/component
import CollateralOptionItem from "../../CollateralOptionItem"; // plasmic-import: 5NQDrFliC8CX/component
import LoanSteps from "../../LoanSteps"; // plasmic-import: 9Xt3tSsiOwrX/component
import ConnectWallet from "../../ConnectWallet"; // plasmic-import: 1GlNaZ2SY0FO/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicLoanHomepage.module.css"; // plasmic-import: pgGkyFmZe3k7/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: e58rgm-WFTW/icon
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: uC8bBJhPRpth/icon

createPlasmicElementProxy;

export type PlasmicLoanHomepage__VariantMembers = {};
export type PlasmicLoanHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoanHomepage__VariantsArgs;
export const PlasmicLoanHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicLoanHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicLoanHomepage__ArgsType;
export const PlasmicLoanHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicLoanHomepage__OverridesType = {
  root?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  p?: p.Flex<"p">;
  ul?: p.Flex<"ul">;
  li?: p.Flex<"li">;
  h6?: p.Flex<"h6">;
  connectWallet?: p.Flex<typeof ConnectWallet>;
};

export interface DefaultLoanHomepageProps {
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

function PlasmicLoanHomepage__RenderFunc(props: {
  variants: PlasmicLoanHomepage__VariantsArgs;
  args: PlasmicLoanHomepage__ArgsType;
  overrides: PlasmicLoanHomepage__OverridesType;
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
        path: "openWallet",
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
      <section className={classNames(projectcss.all, sty.section__ybVF)}>
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__cGbpT)}>
            <h2
              data-plasmic-name={"h2"}
              data-plasmic-override={overrides.h2}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2
              )}
            >
              {"Get Instant Crypto Loans"}
            </h2>
            <p
              data-plasmic-name={"p"}
              data-plasmic-override={overrides.p}
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.p
              )}
            >
              {
                "Use more than 50 TOP coins as collateral for crypto loans with the highest loan-to-value ratio (90%). Get loans in stablecoins or crypto and withdraw instantly to your wallets or exchanges."
              }
            </p>
            <Button3
              className={classNames("__wab_instance", sty.button3__zO5H9)}
              color={"blue" as const}
              onClick={async event => {
                const $steps = {};
                $steps["updateVariable"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "MQesKf_NWZPS",
                            componentUuid: "pgGkyFmZe3k7",
                            argName: "variable"
                          },
                          () => ({
                            objRoot: $state,
                            variablePath: ["openWallet"]
                          })
                        ),
                        operation: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "MQesKf_NWZPS",
                            componentUuid: "pgGkyFmZe3k7",
                            argName: "operation"
                          },
                          () => 4
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariable",
                          interactionUuid: "MQesKf_NWZPS",
                          componentUuid: "pgGkyFmZe3k7"
                        },
                        () =>
                          (({ variable, value, startIndex, deleteCount }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;

                            const oldValue = p.get(objRoot, variablePath);
                            p.set(objRoot, variablePath, !oldValue);
                            return !oldValue;
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["updateVariable"] === "object" &&
                  typeof $steps["updateVariable"].then === "function"
                ) {
                  $steps["updateVariable"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariable",
                      interactionUuid: "MQesKf_NWZPS",
                      componentUuid: "pgGkyFmZe3k7"
                    },
                    $steps["updateVariable"]
                  );
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uu4Pg
                )}
              >
                {"Get Loan"}
              </div>
            </Button3>
          </div>
        ) : null}
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__xr312)}
        >
          <InfoHoldingComponent
            className={classNames(
              "__wab_instance",
              sty.infoHoldingComponent__fGhMr
            )}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__c7OEa
              )}
            >
              <React.Fragment>
                <React.Fragment> </React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#000000" }}
                >
                  {"friend.tech"}
                </span>
                <React.Fragment>
                  {
                    " crypto-backed lending solutions structured in the form of collateralised (pawnshop) loans. "
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
          </InfoHoldingComponent>
          <InfoHoldingComponent
            className={classNames(
              "__wab_instance",
              sty.infoHoldingComponent__ejZ
            )}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lftvc
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#000000" }}
                >
                  {" friend.tech"}
                </span>
                <React.Fragment>
                  {
                    " crypto-lending solutions is structured in the form of token purchase/re-purchase agreements. "
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
          </InfoHoldingComponent>
        </p.Stack>
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__nMGqx)}
          >
            <BackersLink
              className={classNames("__wab_instance", sty.backersLink__rpOYc)}
            />

            <BackersLink
              className={classNames("__wab_instance", sty.backersLink__b6L7E)}
              slot={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__rxLai)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={
                    "https://assets-global.website-files.com/5cc19fbd198b8d31a9c64876/63c05fb0cdaada6a20231e71_testimonial_ledger.svg" as const
                  }
                />
              }
            >
              {"Custody secured by Ledger Enterprise"}
            </BackersLink>
            <BackersLink
              className={classNames("__wab_instance", sty.backersLink__lwnah)}
              slot={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__t5Pl)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={
                    "https://assets-global.website-files.com/5cc19fbd198b8d31a9c64876/63c05fb35925bbf0b0b93c0a_testimonial_torino_fc.svg" as const
                  }
                />
              }
            >
              {"Official Crypto Partner of Torino FC"}
            </BackersLink>
          </p.Stack>
        ) : null}
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__nRxzx)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={
            "https://assets-global.website-files.com/5cc19fbd198b8d31a9c64876/636bbb544247aa213c570a66_Illustration_loans.jpg" as const
          }
        />
      </section>
      {true ? (
        <section className={classNames(projectcss.all, sty.section__qODwQ)}>
          <h3
            className={classNames(
              projectcss.all,
              projectcss.h3,
              projectcss.__wab_text,
              sty.h3___9EHx9
            )}
          >
            {"Collateral Options"}
          </h3>
          <div className={classNames(projectcss.all, sty.freeBox__ihlSa)}>
            <CollateralOptionItem
              className={classNames(
                "__wab_instance",
                sty.collateralOptionItem__er2D
              )}
            />

            <CollateralOptionItem
              className={classNames(
                "__wab_instance",
                sty.collateralOptionItem__weuh9
              )}
            />

            <CollateralOptionItem
              className={classNames(
                "__wab_instance",
                sty.collateralOptionItem__x6AP7
              )}
            />
          </div>
        </section>
      ) : null}
      <section className={classNames(projectcss.all, sty.section__zSdQe)}>
        <h3
          className={classNames(
            projectcss.all,
            projectcss.h3,
            projectcss.__wab_text,
            sty.h3__qz64
          )}
        >
          {"How Crypto Backed Loans Work"}
        </h3>
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__dskrG)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__gAzOr)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={
                "https://assets-global.website-files.com/5cc19fbd198b8d31a9c64876/63c7d15611d6b5f71fb0005f_screen_loans-create-p-800.png" as const
              }
            />
          </div>
        ) : null}
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__rp03U)}
          >
            {true ? (
              <LoanSteps
                className={classNames("__wab_instance", sty.loanSteps___3Q8GP)}
                slot2={
                  "friend.tech accepts more than 50 cryptocurrencies as collateral. No fees for crypto deposits or withdrawals."
                }
              />
            ) : null}
            {true ? (
              <LoanSteps
                className={classNames("__wab_instance", sty.loanSteps___8VDnX)}
                slot={"Get a crypto loan and withdraw funds "}
                slot2={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gDs9U
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>
                        {
                          "Login, choose loan settings. Your loan approves instantly. No need to find a lender like in peer-to-peer (p2p) platforms. You instantly receive stablecoins, or popular cryptocurrencies.\n\n"
                        }
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontStyle: "italic", fontWeight: 700 }}
                      >
                        {"Our withdrawal options"}
                      </span>
                      <React.Fragment>{":\n\n"}</React.Fragment>
                      {
                        <ul
                          data-plasmic-name={"ul"}
                          data-plasmic-override={overrides.ul}
                          className={classNames(
                            projectcss.all,
                            projectcss.ul,
                            sty.ul
                          )}
                        >
                          <li
                            data-plasmic-name={"li"}
                            data-plasmic-override={overrides.li}
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li
                            )}
                          >
                            {
                              "    Crypto withdrawal: withdraw any crypto or stablecoins using our integrated crypto exchange."
                            }
                          </li>
                        </ul>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                }
              >
                {"2"}
              </LoanSteps>
            ) : null}
            {true ? (
              <LoanSteps
                className={classNames("__wab_instance", sty.loanSteps__d1Enf)}
                slot={"Manage your payments "}
                slot2={
                  "By default, the loan daily fee is calculated every 24 hours from the loan opening moment. You are free to repay the loan at the stipulated time and get back your 10% collateral."
                }
              >
                {"3"}
              </LoanSteps>
            ) : null}
            {true ? (
              <LoanSteps
                className={classNames("__wab_instance", sty.loanSteps__qmc7E)}
                slot={"Get your crypto collateral back anytime "}
                slot2={
                  "You can repay your loan anytime, and even part of your loan collateral to get your crypto back."
                }
              >
                {"4"}
              </LoanSteps>
            ) : null}
          </p.Stack>
        ) : null}
        <Button3
          className={classNames("__wab_instance", sty.button3__e9AWp)}
          color={"blue" as const}
          onClick={async event => {
            const $steps = {};
            $steps["updateOpenWallet"] = true
              ? (() => {
                  const actionArgs = {
                    variable: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariable",
                        interactionUuid: "ywPwohcDuQYK",
                        componentUuid: "pgGkyFmZe3k7",
                        argName: "variable"
                      },
                      () => ({
                        objRoot: $state,
                        variablePath: ["openWallet"]
                      })
                    ),
                    operation: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariable",
                        interactionUuid: "ywPwohcDuQYK",
                        componentUuid: "pgGkyFmZe3k7",
                        argName: "operation"
                      },
                      () => 4
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariable",
                      interactionUuid: "ywPwohcDuQYK",
                      componentUuid: "pgGkyFmZe3k7"
                    },
                    () =>
                      (({ variable, value, startIndex, deleteCount }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        const oldValue = p.get(objRoot, variablePath);
                        p.set(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
            if (
              typeof $steps["updateOpenWallet"] === "object" &&
              typeof $steps["updateOpenWallet"].then === "function"
            ) {
              $steps["updateOpenWallet"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariable",
                  interactionUuid: "ywPwohcDuQYK",
                  componentUuid: "pgGkyFmZe3k7"
                },
                $steps["updateOpenWallet"]
              );
            }
          }}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__aiiRt
            )}
          >
            {"Get Loan"}
          </div>
        </Button3>
      </section>
      <section className={classNames(projectcss.all, sty.section___9Ufve)}>
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__feU9K)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__zgdrc)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={
                "https://assets-global.website-files.com/5cc19fbd198b8d31a9c64876/63c825b85881a9fcf1edb652_screen_cta_2-p-800.png" as const
              }
            />
          </div>
        ) : null}
        <h3
          className={classNames(
            projectcss.all,
            projectcss.h3,
            projectcss.__wab_text,
            sty.h3__cHk1H
          )}
        >
          {"Get Instant Crypto Loans"}
        </h3>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___5PQjE
          )}
        >
          {
            "Store, exchange stablecoins and crypto. Rewards, staking and loans integrated. "
          }
        </div>
        <Button3
          className={classNames("__wab_instance", sty.button3___8Woe4)}
          color={"white" as const}
          onClick={async event => {
            const $steps = {};
            $steps["updateOpenWallet"] = true
              ? (() => {
                  const actionArgs = {
                    variable: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariable",
                        interactionUuid: "pk55EA-juv8_",
                        componentUuid: "pgGkyFmZe3k7",
                        argName: "variable"
                      },
                      () => ({
                        objRoot: $state,
                        variablePath: ["openWallet"]
                      })
                    ),
                    operation: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariable",
                        interactionUuid: "pk55EA-juv8_",
                        componentUuid: "pgGkyFmZe3k7",
                        argName: "operation"
                      },
                      () => 4
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariable",
                      interactionUuid: "pk55EA-juv8_",
                      componentUuid: "pgGkyFmZe3k7"
                    },
                    () =>
                      (({ variable, value, startIndex, deleteCount }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        const oldValue = p.get(objRoot, variablePath);
                        p.set(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
            if (
              typeof $steps["updateOpenWallet"] === "object" &&
              typeof $steps["updateOpenWallet"].then === "function"
            ) {
              $steps["updateOpenWallet"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariable",
                  interactionUuid: "pk55EA-juv8_",
                  componentUuid: "pgGkyFmZe3k7"
                },
                $steps["updateOpenWallet"]
              );
            }
          }}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__l5L
            )}
          >
            {"Get Loan"}
          </div>
        </Button3>
      </section>
      <section className={classNames(projectcss.all, sty.section___9AIx9)}>
        <h6
          data-plasmic-name={"h6"}
          data-plasmic-override={overrides.h6}
          className={classNames(
            projectcss.all,
            projectcss.h6,
            projectcss.__wab_text,
            sty.h6
          )}
        >
          {"\nFRIEND.TECH IS REGULATED IN SWITZERLAND AND EU\n"}
        </h6>
        <BackersLink
          className={classNames("__wab_instance", sty.backersLink__fDoD9)}
          slot={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__k7Kk)}
              displayHeight={"20px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"20px" as const}
              loading={"lazy" as const}
              src={
                "https://assets-global.website-files.com/5cc19fbd198b8d31a9c64876/5d81e319d805196b051acc75_switzerland%20(1).svg" as const
              }
            />
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bSiVs
            )}
          >
            {"friend.tech Regulated Financial  Control."}
          </div>
        </BackersLink>
        <BackersLink
          className={classNames("__wab_instance", sty.backersLink__baeU3)}
          slot={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__mbNg)}
              displayHeight={"20px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"20px" as const}
              loading={"lazy" as const}
              src={
                "https://assets-global.website-files.com/5cc19fbd198b8d31a9c64876/5d81e344072bc3cc6157f8c7_european-union.svg" as const
              }
            />
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___8U8K5
            )}
          >
            {"friend.tech S.R.L. OAM Registration"}
          </div>
        </BackersLink>
        <BackersLink
          className={classNames("__wab_instance", sty.backersLink__qDn4M)}
          slot={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___7R4A)}
              displayHeight={"20px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"20px" as const}
              loading={"lazy" as const}
              src={
                "https://assets-global.website-files.com/5cc19fbd198b8d31a9c64876/63c1a1e8c740e1e785d20c56_wallet.svg" as const
              }
            />
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___4SHmR
            )}
          >
            {"Partnership with regulated EU financial providers"}
          </div>
        </BackersLink>
      </section>
      <ConnectWallet
        data-plasmic-name={"connectWallet"}
        data-plasmic-override={overrides.connectWallet}
        className={classNames("__wab_instance", sty.connectWallet)}
        connectWallet={(() => {
          try {
            return $state.openWallet;
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
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h2", "p", "ul", "li", "h6", "connectWallet"],
  h2: ["h2"],
  p: ["p"],
  ul: ["ul", "li"],
  li: ["li"],
  h6: ["h6"],
  connectWallet: ["connectWallet"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h2: "h2";
  p: "p";
  ul: "ul";
  li: "li";
  h6: "h6";
  connectWallet: typeof ConnectWallet;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoanHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoanHomepage__VariantsArgs;
    args?: PlasmicLoanHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoanHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoanHomepage__ArgsType,
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
          internalArgPropNames: PlasmicLoanHomepage__ArgProps,
          internalVariantPropNames: PlasmicLoanHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoanHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoanHomepage";
  } else {
    func.displayName = `PlasmicLoanHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicLoanHomepage = Object.assign(
  // Top-level PlasmicLoanHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),
    p: makeNodeComponent("p"),
    ul: makeNodeComponent("ul"),
    li: makeNodeComponent("li"),
    h6: makeNodeComponent("h6"),
    connectWallet: makeNodeComponent("connectWallet"),

    // Metadata about props expected for PlasmicLoanHomepage
    internalVariantProps: PlasmicLoanHomepage__VariantProps,
    internalArgProps: PlasmicLoanHomepage__ArgProps
  }
);

export default PlasmicLoanHomepage;
/* prettier-ignore-end */