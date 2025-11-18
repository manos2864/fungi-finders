import { useEffect } from "react";

export function useResizeClass<T extends HTMLElement | null>(
  ref: React.RefObject<T>,
  className = "is-resizing"
) {
  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new ResizeObserver(() => {
      el.classList.add(className);

      requestAnimationFrame(() => {
        el.classList.remove(className);
      });
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, className]);
}
