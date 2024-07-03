import React, { CSSProperties } from "react";
import clsx from "clsx";
import { useLocation } from "@remix-run/react";
import { LinkProps as NextLinkProps } from "next/link";
import { Link as NextLink } from "@remix-run/react";
import {
  Box,
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  SxProps,
  Theme,
} from "@mui/material";

function isAbsolutePath(urlString: string) {
  return (
    urlString.indexOf("http://") === 0 || urlString.indexOf("https://") === 0
  );
}

interface NextLinkComposedProps extends Omit<NextLinkProps, "linkAs"> {
  to: NextLinkProps["href"];
  linkAs: NextLinkProps["as"];
  className: string;
  href: string;
}

export const NextLinkComposed = React.forwardRef<
  HTMLAnchorElement,
  NextLinkComposedProps
>((props, ref) => {
  const {
    to,
    linkAs,
    className,
    href,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
    ...other
  } = props;

  return (
    <NextLink
      to={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
    >
      <a ref={ref} className={className} href={href} {...other} />
    </NextLink>
  );
});

NextLinkComposed.displayName = "NextLinkComposed";

const removeLinkStyleSx: CSSProperties = {
  color: "inherit",
  textDecoration: "inherit",
};

/** Workaround for Link only, do not use it in other cases  */
export const PUBLIC_PATH = "/a1-px-app";

function getHrefAndPathname(
  isAppRelativePath: boolean,
  href: NextLinkProps["href"],
  pathname: string
) {
  let convertedHrefForAppRelative: NextLinkProps["href"] = href;
  let convertedPathnameForAppRelative = pathname;

  if (isAppRelativePath) {
    convertedHrefForAppRelative =
      typeof href === "string"
        ? href.replace(PUBLIC_PATH, "")
        : {
            ...href,
            pathname: href.pathname?.replace(PUBLIC_PATH, ""),
          };

    convertedPathnameForAppRelative = pathname.replace(PUBLIC_PATH, "");
  }

  return {
    href: convertedHrefForAppRelative,
    pathname: convertedPathnameForAppRelative,
  };
}

interface LinkProps extends Omit<MuiLinkProps, "href"> {
  activeClassName?: string;
  as?: NextLinkProps["as"];
  browserDefaultStyle?: boolean;
  className?: string;
  href: string | NextLinkProps["href"] | undefined | null;
  removeLinkStyle?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    activeClassName = "active",
    as: linkAs,
    className: classNameProps,
    href = "",
    browserDefaultStyle,
    removeLinkStyle,
    sx: linkSxProp,
    ...other
  } = props;

  const location = useLocation();
  // const pathname = location.pathname;
  const pathname =
    typeof href === "string" || href === null ? href : href.pathname;

  if (!pathname || !href) {
    return <>{props.children}</>;
  }

  const hostReg = /^((https?):\/\/)?([^/]*)/;
  const origin = window?.location.origin;
  const className = clsx(classNameProps, {
    [activeClassName]: location.pathname === pathname && activeClassName,
  });
  const systemStyle: SxProps<Theme> = [
    removeLinkStyle && removeLinkStyleSx,
    ...(Array.isArray(linkSxProp) ? linkSxProp : [linkSxProp]),
  ];

  const isExternal =
    typeof href === "string" &&
    ((href.indexOf("http") === 0 && href.match(hostReg)?.[0] !== origin) ||
      href.indexOf("mailto:") === 0);

  const isRelativePath = !isAbsolutePath(pathname);
  const isAppRelativePath =
    isRelativePath && pathname.indexOf(PUBLIC_PATH) === 0;
  const isNotAppRelativePath = !isAppRelativePath;
  const convertedHrefAndPathName = getHrefAndPathname(
    isAppRelativePath,
    href,
    pathname
  );

  if (isExternal) {
    if (browserDefaultStyle) {
      return (
        <Box
          component="a"
          className={className}
          href={href}
          ref={ref}
          {...other}
          target="_blank"
          rel="noreferrer"
        />
      );
    }

    return (
      <MuiLink
        className={className}
        href={href}
        ref={ref}
        target="_blank"
        rel="noreferrer"
        sx={systemStyle}
        {...other}
      />
    );
  }

  if (isNotAppRelativePath) {
    if (browserDefaultStyle) {
      return (
        <Box
          component="a"
          className={className}
          href={pathname}
          ref={ref}
          {...other}
        />
      );
    }

    return (
      <MuiLink
        className={className}
        href={pathname}
        ref={ref}
        sx={systemStyle}
        {...other}
      />
    );
  }

  if (browserDefaultStyle) {
    return (
      <NextLinkComposed
        className={className}
        linkAs={linkAs}
        ref={ref}
        to={convertedHrefAndPathName.href}
        href={convertedHrefAndPathName.pathname}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      component={NextLinkComposed}
      linkAs={linkAs}
      className={className}
      ref={ref}
      to={convertedHrefAndPathName.href}
      sx={systemStyle}
      {...other}
    />
  );
});

Link.displayName = "Link";

export default Link;
