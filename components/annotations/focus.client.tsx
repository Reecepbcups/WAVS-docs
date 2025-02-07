"use client";

import React, { useLayoutEffect, useRef } from "react";
import { AnnotationHandler, InnerPre, getPreRef } from "codehike/code";

export const PreWithFocus: AnnotationHandler["PreWithRef"] = (props) => {
  const ref = getPreRef(props);
  useScrollToFocus(ref); // Manage scroll to focused lines
  return <InnerPre merge={props} className="overflow-auto max-h-full" />;
};

function useScrollToFocus(ref: React.RefObject<HTMLPreElement>) {
  const firstRender = useRef(true);

  useLayoutEffect(() => {
    if (ref.current) {
      // Find all descendants with `data-focus=true`
      const focusedElements = ref.current.querySelectorAll(
        "[data-focus=true]"
      ) as NodeListOf<HTMLElement>;

      if (focusedElements.length === 0) return;

      // Calculate the bounds of focused elements relative to the container
      const containerRect = ref.current.getBoundingClientRect();
      let top = Infinity;
      let bottom = -Infinity;

      focusedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        top = Math.min(top, rect.top - containerRect.top);
        bottom = Math.max(bottom, rect.bottom - containerRect.top);
      });

      // Scroll to ensure focused elements are visible
      if (bottom > containerRect.height || top < 0) {
        ref.current.scrollTo({
          top: ref.current.scrollTop + top - 10,
          behavior: firstRender.current ? "auto" : "smooth",
        });
      }
      firstRender.current = false;
    }
  });
}
