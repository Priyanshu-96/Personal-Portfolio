import { motion, useAnimation } from "framer-motion";
import { useEffect, forwardRef } from "react";
import { useInView } from "react-intersection-observer";

const ScrollFadeIn = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, externalRef) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={(node) => {
          // Attach both refs if needed
          ref(node);
          if (typeof externalRef === "function") externalRef(node);
          else if (externalRef) (externalRef as React.MutableRefObject<any>).current = node;
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }
);

ScrollFadeIn.displayName = "ScrollFadeIn";
export default ScrollFadeIn;
