// src/hooks/useDragScroll.ts
import { useRef, useCallback } from "react";

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    isDragging.current = true;
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollStart.current = ref.current.scrollLeft;
    e.preventDefault();
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (!ref.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - ref.current.offsetLeft;
    scrollStart.current = ref.current.scrollLeft;
  }, []);

  const stopDragging = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = x - startX.current;
    ref.current.scrollLeft = scrollStart.current - walk;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current || !ref.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - ref.current.offsetLeft;
    const walk = x - startX.current;
    ref.current.scrollLeft = scrollStart.current - walk;
  }, []);

  return {
    ref,
    handlers: {
      onMouseDown,
      onMouseUp: stopDragging,
      onMouseLeave: stopDragging,
      onMouseMove,
      onTouchStart,
      onTouchEnd: stopDragging,
      onTouchMove,
    },
  };
}
