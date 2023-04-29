import React, { useEffect } from "react";

/**
 * Used to call a function when user clicks outside a given HTML element
 * @param {React.MutableRefObject<HTMLElement>} ref A ref object pointing to the HTML element
 * @param {(ev: Event) => any} handler A handler function that will be invoked when the user clicks
 * outside the element
 */
export function useOnClickOutside(
   ref: React.MutableRefObject<HTMLElement>,
   handler: (event: Event) => any
) {
   useEffect(() => {
      const listener = (event: MouseEvent | TouchEvent) => {
         if (!ref.current || ref.current.contains(event.target! as any)) return;
         handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
         document.removeEventListener("mousedown", listener);
         document.removeEventListener("touchstart", listener);
      };
   }, [ref, handler]);
}
