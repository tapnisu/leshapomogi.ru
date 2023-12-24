import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return <div disabled={!IS_BROWSER || props.disabled}>{props.children}</div>;
}
