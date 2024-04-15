import { useCallback, useEffect, useState } from "react";

export interface WindowSize {
  width?: number;
  height?: number;
}

export const BREAKPOINTS = {
  md: 768,
  xl: 1280,
} as const;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({});

  const onResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    // Run when on mount
    onResize();
    if (window) window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  const smallerBreakPoints = useCallback(
    (width: keyof typeof BREAKPOINTS) => {
      return Number(BREAKPOINTS[width]) > Number(windowSize.width);
    },
    [windowSize.width]
  );

  const largerBreakPoints = useCallback(
    (width: keyof typeof BREAKPOINTS) => {
      return Number(BREAKPOINTS[width]) < Number(windowSize.width);
    },
    [windowSize.width]
  );

  return {
    windowSize,
    smallerBreakPoints,
    largerBreakPoints,
    md: Number(windowSize.width) <= BREAKPOINTS.xl,
    xl: Number(windowSize.width) > BREAKPOINTS.xl,
  };
};

export default useWindowSize;
