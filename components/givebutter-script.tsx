"use client";

import Script from "next/script";
import { GIVEBUTTER_ACCOUNT_ID } from "@/lib/givebutter";

/**
 * Loads the Givebutter Widgets library once per page so that any
 * <givebutter-button> / <givebutter-giving-form> elements on the page
 * become interactive.
 */
export function GivebutterScript() {
  return (
    <Script
      id="givebutter-widgets"
      src={`https://widgets.givebutter.com/latest.umd.cjs?acct=${GIVEBUTTER_ACCOUNT_ID}`}
      strategy="afterInteractive"
    />
  );
}
