// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sFqKXDN8rHnCDU91Y9JUYu
// Component: SfWv_--dQ9Pb

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
import Button from "../../Button"; // plasmic-import: X48cJgHH48y/component
import ConnectWallet from "../../ConnectWallet"; // plasmic-import: 1GlNaZ2SY0FO/component

import { useScreenVariants as useScreenVariantswjymDpmg8BQ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WJYMDpmg8bQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_friends_tech_king.module.css"; // plasmic-import: sFqKXDN8rHnCDU91Y9JUYu/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: SfWv_--dQ9Pb/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: e58rgm-WFTW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: iECEl4Bsrc_/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: 0euhnWJje1jg/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: 1w4Gi4VeEeur/icon

createPlasmicElementProxy;

export type PlasmicNavbar__VariantMembers = {};
export type PlasmicNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<"div">;
  text?: p.Flex<"div">;
  menu?: p.Flex<"div">;
  links?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  connectWallet?: p.Flex<typeof ConnectWallet>;
};

export interface DefaultNavbarProps {
  className?: string;
}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;
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
        path: "showMenu",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
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
        data-plasmic-name={"navbar"}
        data-plasmic-override={overrides.navbar}
        className={classNames(projectcss.all, sty.navbar)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__hMeYt)}>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__ioIiW
            )}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#20BAF6" }}
                >
                  {"Friend."}
                </span>
                <React.Fragment>{""}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#383B3D" }}
                >
                  {"Tech"}
                </span>
              </React.Fragment>
            </div>
          </p.PlasmicLink>
        </div>
        {(
          hasVariant(globalVariants, "screen", "desktopOnly")
            ? (() => {
                try {
                  return $state.showMenu;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })()
            : (() => {
                try {
                  return $state.showMenu;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })()
        ) ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"menu"}
            data-plasmic-override={overrides.menu}
            hasGap={true}
            className={classNames(projectcss.all, sty.menu)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"links"}
              data-plasmic-override={overrides.links}
              hasGap={true}
              className={classNames(projectcss.all, sty.links)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__ubzN9
                )}
                component={Link}
                href={`/loan`}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateShowMenu"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["showMenu"]
                          },
                          operation: 4
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          const oldValue = p.get(objRoot, variablePath);
                          p.set(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateShowMenu"] === "object" &&
                    typeof $steps["updateShowMenu"].then === "function"
                  ) {
                    $steps["updateShowMenu"] = await $steps["updateShowMenu"];
                  }
                }}
                platform={"nextjs"}
              >
                {"Loan"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__zvts0
                )}
                component={Link}
                href={`/whitelist`}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateShowMenu"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["showMenu"]
                          },
                          operation: 4
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          const oldValue = p.get(objRoot, variablePath);
                          p.set(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateShowMenu"] === "object" &&
                    typeof $steps["updateShowMenu"].then === "function"
                  ) {
                    $steps["updateShowMenu"] = await $steps["updateShowMenu"];
                  }
                }}
                platform={"nextjs"}
              >
                {"Whitelist"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__xTplR
                )}
                component={Link}
                href={`/waitlist`}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateShowMenu"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["showMenu"]
                          },
                          operation: 4
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          const oldValue = p.get(objRoot, variablePath);
                          p.set(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateShowMenu"] === "object" &&
                    typeof $steps["updateShowMenu"].then === "function"
                  ) {
                    $steps["updateShowMenu"] = await $steps["updateShowMenu"];
                  }
                }}
                platform={"nextjs"}
              >
                {"Waitlist"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__aiUNz
                )}
                component={Link}
                href={`/community`}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateShowMenu"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["showMenu"]
                          },
                          operation: 4
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          const oldValue = p.get(objRoot, variablePath);
                          p.set(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateShowMenu"] === "object" &&
                    typeof $steps["updateShowMenu"].then === "function"
                  ) {
                    $steps["updateShowMenu"] = await $steps["updateShowMenu"];
                  }
                }}
                platform={"nextjs"}
              >
                {"Community"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__yNCaT
                )}
                component={Link}
                href={`/airdrop`}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateShowMenu"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["showMenu"]
                          },
                          operation: 4
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          const oldValue = p.get(objRoot, variablePath);
                          p.set(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateShowMenu"] === "object" &&
                    typeof $steps["updateShowMenu"].then === "function"
                  ) {
                    $steps["updateShowMenu"] = await $steps["updateShowMenu"];
                  }
                }}
                platform={"nextjs"}
              >
                {"Airdrop"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__in6Pi
                )}
                component={Link}
                href={`/authenticate`}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateShowMenu"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["showMenu"]
                          },
                          operation: 4
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          const oldValue = p.get(objRoot, variablePath);
                          p.set(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateShowMenu"] === "object" &&
                    typeof $steps["updateShowMenu"].then === "function"
                  ) {
                    $steps["updateShowMenu"] = await $steps["updateShowMenu"];
                  }
                }}
                platform={"nextjs"}
              >
                {"Authenticate"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___2PzMq
                )}
                component={Link}
                href={`/mint`}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateShowMenu"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["showMenu"]
                          },
                          operation: 4
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          const oldValue = p.get(objRoot, variablePath);
                          p.set(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateShowMenu"] === "object" &&
                    typeof $steps["updateShowMenu"].then === "function"
                  ) {
                    $steps["updateShowMenu"] = await $steps["updateShowMenu"];
                  }
                }}
                platform={"nextjs"}
              >
                {"Mint"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__gQzkZ
                )}
                component={Link}
                href={`/investment`}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateShowMenu"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["showMenu"]
                          },
                          operation: 4
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          const oldValue = p.get(objRoot, variablePath);
                          p.set(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateShowMenu"] === "object" &&
                    typeof $steps["updateShowMenu"].then === "function"
                  ) {
                    $steps["updateShowMenu"] = await $steps["updateShowMenu"];
                  }
                }}
                platform={"nextjs"}
              >
                {"Invest"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__avnfp
                )}
                component={Link}
                href={`/about`}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateShowMenu"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["showMenu"]
                          },
                          operation: 4
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          const oldValue = p.get(objRoot, variablePath);
                          p.set(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateShowMenu"] === "object" &&
                    typeof $steps["updateShowMenu"].then === "function"
                  ) {
                    $steps["updateShowMenu"] = await $steps["updateShowMenu"];
                  }
                }}
                platform={"nextjs"}
              >
                {"About"}
              </p.PlasmicLink>
            </p.Stack>
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              ghost={true}
              onClick={async event => {
                const $steps = {};
                $steps["updateConnectWallet"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["connectWallet"]
                        },
                        operation: 4
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        const oldValue = p.get(objRoot, variablePath);
                        p.set(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  typeof $steps["updateConnectWallet"] === "object" &&
                  typeof $steps["updateConnectWallet"].then === "function"
                ) {
                  $steps["updateConnectWallet"] = await $steps[
                    "updateConnectWallet"
                  ];
                }
              }}
            >
              {"Get Started"}
            </Button>
          </p.Stack>
        ) : null}
        <div className={classNames(projectcss.all, sty.freeBox___6UoI)}>
          {(() => {
            try {
              return !$state.showMenu;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <Icon6Icon
              className={classNames(projectcss.all, sty.svg__mVvNh)}
              onClick={async event => {
                const $steps = {};
                $steps["updateShowMenu"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["showMenu"]
                        },
                        operation: 4
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        const oldValue = p.get(objRoot, variablePath);
                        p.set(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  typeof $steps["updateShowMenu"] === "object" &&
                  typeof $steps["updateShowMenu"].then === "function"
                ) {
                  $steps["updateShowMenu"] = await $steps["updateShowMenu"];
                }
              }}
              role={"img"}
            />
          ) : null}
          {(() => {
            try {
              return $state.showMenu;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <Icon7Icon
              className={classNames(projectcss.all, sty.svg__j1Y35)}
              onClick={async event => {
                const $steps = {};
                $steps["updateShowMenu"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["showMenu"]
                        },
                        operation: 4
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        const oldValue = p.get(objRoot, variablePath);
                        p.set(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  typeof $steps["updateShowMenu"] === "object" &&
                  typeof $steps["updateShowMenu"].then === "function"
                ) {
                  $steps["updateShowMenu"] = await $steps["updateShowMenu"];
                }
              }}
              role={"img"}
            />
          ) : null}
        </div>
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
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "text", "menu", "links", "button", "connectWallet"],
  navbar: ["navbar", "text", "menu", "links", "button"],
  text: ["text"],
  menu: ["menu", "links", "button"],
  links: ["links"],
  button: ["button"],
  connectWallet: ["connectWallet"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: "div";
  text: "div";
  menu: "div";
  links: "div";
  button: typeof Button;
  connectWallet: typeof ConnectWallet;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbar__ArgsType,
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
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    text: makeNodeComponent("text"),
    menu: makeNodeComponent("menu"),
    links: makeNodeComponent("links"),
    button: makeNodeComponent("button"),
    connectWallet: makeNodeComponent("connectWallet"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
