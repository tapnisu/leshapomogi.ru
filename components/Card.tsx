import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export function Card(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      disabled={!IS_BROWSER || props.disabled}
      className="p-4 m-4 rounded-lg border-2 border-neutral-600"
    >
      {props.children}
    </div>
  );
}
