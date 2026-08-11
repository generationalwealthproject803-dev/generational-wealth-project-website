// Type declarations for Givebutter's custom Web Component widgets
// so TSX accepts <givebutter-button>, <givebutter-giving-form>, and
// <givebutter-goal-bar> as valid intrinsic elements under React 19's
// JSX namespace (which lives inside the "react" module, not globally).
import type * as React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { [key: string]: any };
      "givebutter-giving-form": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { [key: string]: any };
      "givebutter-goal-bar": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { [key: string]: any };
    }
  }
}

export {};
