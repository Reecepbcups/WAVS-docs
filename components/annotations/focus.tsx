import { AnnotationHandler, InnerLine } from "codehike/code";
import { PreWithFocus } from "./focus.client";

export const focus: AnnotationHandler = {
  name: "focus",
  onlyIfAnnotated: true, // Only process lines with focus annotations
  PreWithRef: PreWithFocus, // Use the focus-aware PreWithFocus
  Line: (props) => (
    <InnerLine
      merge={props}
      className="opacity-40 data-[focus=true]:opacity-100 px-2"
    />
  ),
  AnnotatedLine: ({ annotation, ...props }) => (
    <InnerLine
      merge={props}
      data-focus={true}
      //className="bg-zinc-700/30" // Highlight the focused lines
    />
  ),
};
