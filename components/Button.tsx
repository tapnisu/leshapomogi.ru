import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="w-fit py-4 px-8 m-2 rounded-full text-white dark:bg-cyan-500 hover:bg-cyan-700 transition-colors "
    />
  );
}
