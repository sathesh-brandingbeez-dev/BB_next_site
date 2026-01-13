"use client";

export const navigate = (to: string) => {
  if (typeof window === "undefined") return;
  window.location.assign(to);
};
