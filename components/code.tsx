import { Pre, RawCode, highlight } from "codehike/code";
import { callout } from "./annotations/callout";
import { CopyButton } from "./button";
import { hover } from "./annotations/code-mentions";
import { diff } from "./annotations/diff";
import { mark } from "./annotations/mark";
import {
  collapse,
  collapseContent,
  collapseTrigger,
} from "./annotations/collapse";
import { focus } from "./annotations/focus";
import { lineNumbers } from "./annotations/line-numbers";

import { link } from "./annotations/link";
import { tokenTransitions } from "./annotations/token-transitions";
import { wordWrap } from "./annotations/word-wrap";

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "min-dark");

  return (
    <div className="border rounded relative">
      <div className="text-center text-zinc-400 text-sm">
      <CopyButton text={highlighted.code} />
        {highlighted.meta}
      </div>

      <Pre
        code={highlighted}
        handlers={[
          callout,
          hover,
          diff,
          mark,
          collapse,
          collapseTrigger,
          collapseContent,
          focus,
          // lineNumbers,
          link,
          tokenTransitions,
          wordWrap
        ]}
        className="m-0 bg-card rounded"
      />
    </div>
  );
}

