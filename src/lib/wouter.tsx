"use client";

import React from "react";
import NextLink from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type LinkProps = React.ComponentProps<typeof NextLink> & {
  href: string;
};

export function Link({ href, ...props }: LinkProps) {
  return <NextLink href={href} {...props} />;
}

export function useLocation(): [string, (to: string) => void] {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams?.toString();
  const location = search ? `${pathname}?${search}` : pathname;

  const navigate = (to: string) => {
    router.push(to);
  };

  return [location, navigate];
}

export function useRoute(
  pattern: string,
): [boolean, Record<string, string> | null] {
  const pathname = usePathname();

  const paramNames: string[] = [];
  const regexPattern = pattern
    .replace(/\/:(\w+)/g, (_match, key) => {
      paramNames.push(key);
      return "/([^/]+)";
    })
    .replace(/\//g, "\\/");

  const regex = new RegExp(`^${regexPattern}\\/?$`);
  const match = pathname.match(regex);

  if (!match) {
    return [false, null];
  }

  const params: Record<string, string> = {};
  paramNames.forEach((key, index) => {
    params[key] = decodeURIComponent(match[index + 1] || "");
  });

  return [true, params];
}
