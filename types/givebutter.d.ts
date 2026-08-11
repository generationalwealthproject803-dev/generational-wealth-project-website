// Type declarations for Givebutter's custom Web Component widgets
// so TypeScript/JSX accepts <givebutter-button>, <givebutter-giving-form>,
// and <givebutter-goal-bar> as valid intrinsic elements.
declare namespace JSX {
  interface IntrinsicElements {
    "givebutter-button": any;
    "givebutter-giving-form": any;
    "givebutter-goal-bar": any;
  }
}
